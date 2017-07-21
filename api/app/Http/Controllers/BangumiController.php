<?php

namespace App\Http\Controllers;

use App\Models\Bangumi;
use App\Models\Video;

class BangumiController extends Controller
{
    public function news()
    {
        $bangumis = Bangumi::all();
        foreach ($bangumis as $row)
        {
            $row->tags = $row->tags()->select('name')->get();
        }

        return $bangumis;
    }

    public function info($id)
    {
        $bangumi = Bangumi::where('id', $id)->select('id', 'name', 'banner', 'summary', 'alias')->first();

        $bangumi->alias = $bangumi['alias'] === 'null' ? '' : json_decode($bangumi['alias'])->search;

        $tags = $bangumi->tags()->select('name')->get()->toArray();

        foreach ($tags as $i => $tag)
        {
            $tags[$i] = $tag['name'];
        }

        $video = Video::where('bangumi_id', $id)->select('id', 'part', 'name', 'poster')->get();

        return response()->json([
            'info' => $bangumi,
            'tags' => $tags,
            'videos' => $video
        ], 200);
    }

    public function generate()
    {
        return Bangumi::all()->pluck('id');
    }
}
