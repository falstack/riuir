<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use Illuminate\Http\Request;

class ImageController extends Controller
{
    public function loopShow()
    {
        return Banner::withTrashed()->get();
    }

    public function loopToggle(Request $request)
    {
        $request->get('isDelete')
            ? Banner::find($request->get('id'))->softDeletes()
            : Banner::withTrashed()->find($request->get('id'))->restore();
    }
}
