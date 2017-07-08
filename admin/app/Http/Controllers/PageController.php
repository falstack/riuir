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
        return view('pages.bangumi', ['list' => Bangumi::all()]);
    }

    public function banner()
    {
        return view('pages.banner');
    }
}
