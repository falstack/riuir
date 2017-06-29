<?php

namespace App\Http\Controllers;

use App\Models\Bangumi;
use App\Models\Video;
use Illuminate\Http\Request;

class VideoController extends Controller
{
    public function info($id)
    {
        $info = Video::find($id);

        return response()->json([
            'info' => $info,
            'bangumi' => Bangumi::find($info->bangumi_id)
        ], 200);
    }
}
