<?php

namespace App\Http\Controllers;

use App\Models\Video;
use Illuminate\Http\Request;

class VideoController extends Controller
{
    public function create(Request $request)
    {
        $arr = [];
        foreach($request->get('arr') as $video)
        {
            array_push($arr, [
                'bangumi_id' => $video['bangumi_id'],
                'url' => $video['url'],
                'poster' => $video['poster'],
                'part' => $video['part'],
                'name' => $video['name']
            ]);
        }
        Video::create($arr);
    }

    public function edit(Request $request)
    {
        Video::where('id', $request->get('id'))
            ->update([
                'name' => $request->get('name'),
                'bangumi_id' => $request->get('bangumi_id'),
                'part' => $request->get('part'),
                'poster' => $request->get('poster'),
                'url' => $request->get('url')
            ]);
    }

    public function delete(Request $request)
    {
        $video = Video::withTrashed()->find($request->get('id'));

        $request->get('isDeleted') ? $video->restore() : $video->delete();
    }
}
