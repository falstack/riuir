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
}
