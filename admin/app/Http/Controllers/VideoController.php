<?php

namespace App\Http\Controllers;

use App\Models\Video;
use Illuminate\Http\Request;

class VideoController extends Controller
{
    public function create(Request $request)
    {
        return Video::insertGetId([
            'name' => $request->get('name'),
            'bangumi_id' => $request->get('bangumi_id'),
            'part' => $request->get('part'),
            'poster' => $request->get('poster'),
            'url' => $request->get('url')
        ]);
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
