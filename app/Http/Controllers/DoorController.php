<?php

namespace App\Http\Controllers;

use App\Http\Requests\User\RegisterRequest;
use App\Models\User;
use App\Models\UserZone;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravist\GeeCaptcha\GeeCaptcha;
use Overtrue\LaravelPinyin\Facades\Pinyin as Overtrue;
use Tymon\JWTAuth\Facades\JWTAuth;

class DoorController extends Controller
{
    public function index()
    {
        return view('welcome');
    }

    public function register(RegisterRequest $request)
    {
        $data = [
            'email' => $request->get('email'),
            'nickname' => $request->get('nickname'),
            'password' => $request->get('password'),
            'zone' => $this->createUserZone($request->get('nickname')),
            'avatar' => 'avatar',
            'banner' => 'B-banner'
        ];

        User::create($data);
    }

    public function captcha()
    {
        $captcha = new GeeCaptcha(env('GEETEST_ID'), env('GEETEST_KEY'));

        return $captcha->GTServerIsNormal();
    }

    public function login(Request $request)
    {
        $data = $this->getLoginForm($request->all());

        if (Auth::attempt($data, $request->get('remember')))
        {
            $user = Auth::user();

            $user->token = JWTAuth::fromUser($user);

            return $user;
        }
        else
        {
            return response()->json(['message' => '用户名或密码错误'], 422);
        }
    }

    public function logout()
    {
        Auth::logout();
    }

    public function refresh()
    {
        return $this->getAuthUser();
    }

    protected function createUserZone($name)
    {
        $pinyin = Overtrue::permalink($name);

        $tail = UserZone::where('name', $pinyin)->count();

        if ($tail)
        {
            return $pinyin . '-' . implode('-', str_split(($tail), 2));
        }
        else
        {
            UserZone::create(['name' => $pinyin]);

            return $pinyin;
        }
    }

    protected function getLoginForm($request)
    {
        if ($request['method'] == 'phone')
        {
            $data = [
                'phone' => $request['access'],
                'password' => $request['secret']
            ];
        }
        else
        {
            $data = [
                'email' => $request['access'],
                'password' => $request['secret']
            ];
        }

        return $data;
    }
}
