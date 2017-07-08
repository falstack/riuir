<?php

namespace App\Http\Controllers;

use App\Menu;
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
        return view('pages.bangumi');
    }

    public function banner()
    {
        return view('pages.banner');
    }
}
