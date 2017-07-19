<?php

namespace App\Http\Controllers;

use App\Models\Bangumi;
use App\Models\Video;

class BangumiController extends Controller
{
    public function news()
    {
        return Bangumi::all();
    }

    public function info($id)
    {
        $bangumi = Bangumi::find($id);
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
