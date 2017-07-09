<?php

namespace App\Http\Controllers;

use App\Menu;
use App\Models\Bangumi;
use Illuminate\Support\Facades\Auth;

class PageController extends Controller
{
    public function __construct()
    {
        \View::share('menu', Menu::all());
    }

    public function index()
    {
        return Auth::check() ? view('index') : redirect('login');
    }

    public function bangumi()
    {
        $auth = new \App\Http\Services\Qiniu\Auth();

        return view('pages.bangumi', [
            'list' => Bangumi::withTrashed()->get(),
            'uptoken' => $auth->uploadToken()
        ]);
    }

    public function banner()
    {
        return view('pages.banner');
    }
}
