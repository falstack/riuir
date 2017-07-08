<?php

namespace App\Http\Controllers;

use App\Models\Bangumi;
use Illuminate\Http\Request;

class BangumiController extends Controller
{
    public function list()
    {
        return Bangumi::all();
    }
}
