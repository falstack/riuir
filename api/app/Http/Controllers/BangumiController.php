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
            $bangumi = Bangumi::where('id', $id)->select('id', 'name', 'banner', 'summary', 'alias')->first();

            $bangumi->alias = $bangumi['alias'] === 'null' ? '' : json_decode($bangumi['alias'])->search;

            $tags = $bangumi->tags()->select('name')->get()->toArray();

            foreach ($tags as $i => $tag)
            {
                $tags[$i] = $tag['name'];
            }

            $video = Video::where('bangumi_id', $id)->select('id', 'part', 'name', 'poster')->get();

            return json_encode([
                'info' => $bangumi,
                'tags' => $tags,
                'videos' => $video
            ]);
        });

        return $data;
    }

    public function generate()
    {
        return Bangumi::all()->pluck('id');
    }
}
