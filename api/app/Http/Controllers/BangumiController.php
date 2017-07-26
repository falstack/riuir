<?php

namespace App\Http\Controllers;

use App\Models\Bangumi;
use App\Models\Video;
use Illuminate\Support\Facades\Cache;

class BangumiController extends Controller
{
    public function news()
    {
        $data = Cache::remember('bangumi_list_all', env('CACHE_TTL'), function ()
        {
            $bangumis = Bangumi::all();
            foreach ($bangumis as $row)
            {
                $row->tags = $row->tags()->select('name')->get();
            }
            return $bangumis;
        });

        return $data;
    }

    public function info($id)
    {
        $data = Cache::remember('bangumi_info_' . $id, env('CACHE_TTL'), function () use ($id)
        {
            $bangumi = Bangumi::where('id', $id)->select('id', 'name', 'banner', 'summary', 'alias', 'season')->first();

            $bangumi->alias = $bangumi['alias'] === 'null' ? '' : json_decode($bangumi['alias'])->search;

            $tags = $bangumi->tags()->select('name')->get()->toArray();

            foreach ($tags as $i => $tag)
            {
                $tags[$i] = $tag['name'];
            }

            $bangumi->season = $bangumi['season'] === 'null' ? '' : json_decode($bangumi['season']);

            if ($bangumi->season !== '')
            {
                $list = Video::where('bangumi_id', $id)->select('id', 'part', 'name', 'poster')->get()->toArray();
                $part = $bangumi->season->part;
                $time = $bangumi->season->time;
                $name = $bangumi->season->name;
                $videos = [];
                for ($i=0, $j=1; $j < count($part); $i++, $j++) {
                    $begin = $part[$i];
                    $length = $part[$j] - $begin;
                    array_push($videos, [
                        'name' => $name[$i],
                        'time' => $time[$i],
                        'data' => $length > 0 ? array_slice($list, $begin, $length) : array_slice($list, $begin)
                    ]);
                }
                $bangumi->season = true;
            }
            else
            {
                $bangumi->season = false;
                $videos = Video::where('bangumi_id', $id)->select('id', 'part', 'name', 'poster')->get()->toArray();
            }

            return json_encode([
                'info' => $bangumi,
                'tags' => $tags,
                'videos' => $videos
            ]);
        });

        return $data;
    }

    public function generate()
    {
        return Bangumi::all()->pluck('id');
    }
}
