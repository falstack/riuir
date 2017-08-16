<?php

namespace App\Http\Controllers;

use App\Models\Bangumi;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class BangumiController extends Controller
{
    public function create(Request $request)
    {
        return Bangumi::insertGetId([
            'name' => $request->get('name'),
            'avatar' => $request->get('avatar'),
            'banner' => $request->get('banner'),
            'summary' => $request->get('summary'),
            'alias' => json_encode([
                'search' => $request->get('alias')
            ]),
            'season' => 'null',
            'count_score' => 0
        ]);
    }

    public function edit(Request $request)
    {
        $rollback = false;
        $bangumi_id = $request->get('id');
        DB::beginTransaction();

        $result = DB::table('bangumi_tag')->where('bangumi_id', $bangumi_id)->delete();
        if ($result === false)
        {
            $rollback = true;
        }

        $tags = [];
        foreach($request->get('tags') as $i => $tag_id)
        {
            array_push($tags, [
                'bangumi_id' => $bangumi_id,
                'tag_id' => $tag_id
            ]);
        }
        $result = DB::table('bangumi_tag')->insert($tags);
        if ( ! $result)
        {
            $rollback = true;
        }

        $bangumi = Bangumi::where('id', $bangumi_id)->first();
        $released_video_id = $request->get('released_video_id');
        $arr = [
            'name' => $request->get('name'),
            'avatar' => $request->get('avatar'),
            'banner' => $request->get('banner'),
            'summary' => $request->get('summary'),
            'released_at' => $request->get('released_at'),
            'released_video_id' => $released_video_id,
            'season' => $request->get('season') ? $request->get('season') : 'null',
            'alias' => json_encode([
                'search' => $request->get('alias')
            ])
        ];
        if (intval($released_video_id) !== intval($bangumi->released_video_id)) {
            $arr['published_at'] = time();
        }

        $result = $bangumi->update($arr);
        if ($result === false)
        {
            $rollback = true;
        }

        $rollback ? DB::rollBack() : DB::commit();
    }

    public function delete(Request $request)
    {
        $bangumi = Bangumi::withTrashed()->find($request->get('id'));

        $request->get('isDeleted') ? $bangumi->restore() : $bangumi->delete();
    }
}
