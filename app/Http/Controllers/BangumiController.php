<?php

namespace App\Http\Controllers;

use App\Models\Bangumi;

class BangumiController extends Controller
{
    public function news()
    {
        return Bangumi::all();
    }
}
