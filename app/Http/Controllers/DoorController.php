<?php

namespace App\Http\Controllers;

use App\Http\Requests\User\RegisterRequest;
use App\Models\User;
use App\Models\userZone;
use App\Service\JWTService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Overtrue\LaravelPinyin\Facades\Pinyin as Overtrue;

class DoorController extends Controller
{
    protected $user;
    protected $zone;
    protected $JWTService;

    public function __construct(User $user,
                                userZone $zone,
                                JWTService $JWTService)
    {
        $this->user = $user;
        $this->zone = $zone;
        $this->JWTService = $JWTService;
    }

    public function register(RegisterRequest $request)
    {
        $data = [
            'email' => $request->get('email'),
            'nickname' => $request->get('nickname'),
            'password' => $request->get('password'),
            'zone' => $this->createUserZone($request->get('name')),
            'avatar' => 'avatar',
            'banner' => 'B-banner'
        ];

        $this->user->create($data);
    }

    public function login(Request $request)
    {
        $data = $this->getLoginForm($request->all());

        if (Auth::attempt($data, $request->get('remember')))
        {
            $user = Auth::user();

            $user->token = $this->JWTService->createToken($user);

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

    protected function createUserZone($name)
    {
        $pinyin = Overtrue::permalink($name);

        $tail = $this->zone->where('name', $pinyin)->count();

        if ($tail)
        {
            return $pinyin . '-' . implode('-', str_split(($tail), 2));
        }
        else
        {
            $this->zone->create(['name' => $pinyin]);

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
