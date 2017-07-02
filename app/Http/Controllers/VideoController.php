<?php

namespace App\Http\Controllers;

use App\Models\Bangumi;
use App\Models\Video;

class VideoController extends Controller
{
    public function info($id)
    {
        $info = Video::find($id);

        return response()->json([
            'info' => $info,
            'videos' => Video::where('bangumi_id', $info->bangumi_id)->get(),
            'bangumi' => Bangumi::find($info->bangumi_id)
        ], 200);
    }
}
