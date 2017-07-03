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
        return response()->json([
            'info' => Bangumi::find($id),
            'videos' => Video::where('bangumi_id', $id)->get()
        ], 200);
    }

    public function generate()
    {
        return Bangumi::all()->pluck('id');
    }
}
