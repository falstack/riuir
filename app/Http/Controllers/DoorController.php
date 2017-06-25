<?php

namespace App\Http\Controllers;

use App\Http\Requests\User\RegisterRequest;
use App\Models\User;
use App\Models\userZone;
use App\Service\JWTService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravist\GeeCaptcha\GeeCaptcha;
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
            'zone' => $this->createUserZone($request->get('name')),
            'avatar' => 'avatar',
            'banner' => 'B-banner'
        ];

        $this->user->create($data);
    }

    public function dispatchToken()
    {
        return $this->JWTService->createToken($this->user->find(1));
    }

    public function useToken()
    {
        return $this->getAuthUser();
    }

    public function refreshToken()
    {
        // 旧的 token 不能用了
        // 在 request header 中返回一个新的 token
        // 如果 token 过期了就不能刷新了，会返回401
        // 如果 token 是无效的，则会返回400
        // 所以说 refresh_ttl 比 token_ttl 大的意义在哪里？
        return $this->getAuthUser();
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
