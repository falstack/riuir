<?php

namespace App\Http\Controllers;

use App\Models\Bangumi;
use App\Models\BangumiTag;
use App\Models\Tag;
use App\Models\Video;
use Illuminate\Http\Request;
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

            $alias = $bangumi['alias'] === 'null' ? '' : json_decode($bangumi['alias'])->search;
            $tags = $bangumi->tags()->select('name')->get()->toArray();
            $keywords = $alias;
            foreach ($tags as $tag)
            {
                $keywords = $keywords . ',' .$tag['name'];
            }
            $bangumi->keywords = trim($keywords, ',');

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

    public function tags(Request $request)
    {
        $tagList = Cache::remember('bangumi_tags_all', env('CACHE_TTL'), function ()
        {
            return Tag::where('model', 0)->select('id', 'name')->get()->toArray();
        });

        $tags = $request->get('id');

        if ($tags === null)
        {
            return response()->json(['tags' => $tagList, 'bangumis' => []], 200);
        }
        else
        {
            $arr = array_values(array_unique(array_filter(explode('-', $tags), function ($item) {
                return !preg_match("/[^\d-., ]/", $item);
            })));

            if (empty($arr))
            {
                return null;
            }

            sort($arr);
            $bangumi_id = Cache::remember('bangumi_tags_' . implode('_', $arr), env('CACHE_TTL'), function () use ($arr)
            {
                $count = count($arr);
                $ids = array_count_values(BangumiTag::whereIn('tag_id', $arr)->pluck('bangumi_id')->toArray());
                $ret = [];
                foreach ($ids as $id => $c)
                {
                    if ($c === $count)
                    {
                        array_push($ret, $id);
                    }
                }
                return $ret;
            });

            if (empty($bangumi_id))
            {
                return response()->json(['tags' => $tagList, 'bangumis' => []], 200);
            }

            $bangumis = [];
            foreach ($bangumi_id as $id)
            {
                array_push($bangumis, Cache::remember('bangumi_profile_' . $id, env('CACHE_TTL'), function () use ($id)
                {
                    return Bangumi::find($id)->toArray();
                }));
            }

            return response()->json(['tags' => $tagList, 'bangumis' => $bangumis], 200);
        }
    }

    public function generate()
    {
        return Bangumi::all()->pluck('id');
    }
}
