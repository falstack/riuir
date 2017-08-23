<?php

namespace App\Http\Controllers;

use App\Models\Video;
use Carbon\Carbon;
use Illuminate\Http\Request;

class VideoController extends Controller
{
    public function create(Request $request)
    {
        // 已经又720P的视频，然后又存1080P的视频
        $arr = [];
        foreach($request->get('arr') as $video)
        {
            array_push($arr, [
                'bangumi_id' => $video['bangumi_id'],
                'url' => $video['url'] ? $video['url'] : '',
                'poster' => $video['poster'],
                'part' => $video['part'],
                'name' => $video['name'],
                'resource' => json_encode($video['resource']),
                'deleted_at' => Carbon::now()
            ]);
        }
        Video::insert($arr);
    }

    public function edit(Request $request)
    {
        Video::where('id', $request->get('id'))
            ->update([
                'name' => $request->get('name'),
                'bangumi_id' => $request->get('bangumi_id'),
                'part' => $request->get('part'),
                'poster' => $request->get('poster'),
                'url' => $request->get('url') ? $request->get('url') : '',
                'resource' => json_encode($request->get('resource'))
            ]);
    }

    public function delete(Request $request)
    {
        $video = Video::withTrashed()->find($request->get('id'));

        $request->get('isDeleted') ? $video->restore() : $video->delete();
    }
}
