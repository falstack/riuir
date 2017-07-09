<?php

namespace App\Http\Controllers;

use App\Models\Bangumi;
use Illuminate\Http\Request;

class BangumiController extends Controller
{
    public function create(Request $request)
    {
        return Bangumi::insertGetId([
            'name' => $request->get('name'),
            'avatar' => $request->get('avatar'),
            'banner' => $request->get('banner'),
            'summary' => $request->get('summary'),
            'count_score' => 0
        ]);
    }

    public function edit(Request $request)
    {
        Bangumi::where('id', $request->get('id'))
            ->update([
                'name' => $request->get('name'),
                'avatar' => $request->get('avatar'),
                'banner' => $request->get('banner'),
                'summary' => $request->get('summary')
            ]);
    }

    public function delete(Request $request)
    {
        $bangumi = Bangumi::withTrashed()->find($request->get('id'));

        $request->get('isDeleted') ? $bangumi->restore() : $bangumi->delete();
    }
}
