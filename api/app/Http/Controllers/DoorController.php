<?php

namespace App\Http\Controllers;

use App\Http\Requests\User\RegisterRequest;
use App\Mail\Welcome;
use App\Models\Banner;
use App\Models\Confirm;
use App\Models\User;
use App\Models\UserZone;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use App\Services\GeeCaptcha;
use Illuminate\Support\Facades\Mail;
use Overtrue\LaravelPinyin\Facades\Pinyin as Overtrue;
use Tymon\JWTAuth\Facades\JWTAuth;

class DoorController extends Controller
{
    public function index()
    {
        return view('welcome');
    }

    public function deploy(Request $request)
    {
        $commands = [
            'cd /var/www/riuir',
            'git pull'
        ];
        $signature = $request->header('X-Hub-Signature');
        $payload = file_get_contents('php://input');
        if ($this->isFromGithub($payload, $signature)) {
            foreach ($commands as $command) {
                shell_exec($command);
            }
            http_response_code(200);
        } else {
            abort(403);
        }
    }

    public function banner()
    {
        $banners = Cache::remember('index_banner', config('cache.ttl'), function () {
            return Banner::select('id', 'url', 'user_id', 'bangumi_id')->get()->toArray();
        });

        return $banners[array_rand($banners)];
    }

    public function checkAccessUnique(Request $request)
    {
        $method = $request->get('method');

        return in_array($method, ['phone', 'email'])
            ? User::where($method, $request->get('value'))->count()
            : null;
    }

    public function sendEmailOrMessage(Request $request)
    {
        $method = $request->get('method');
        $access = $request->get('access');
        $nickname = $request->get('nickname');

        if ( ! in_array($method, ['phone', 'email'])) {
            return null;
        }

        $token = $this->makeConfirm($access);

        if ($method === 'email') {
            Mail::to($access)->send(new Welcome($nickname, $token));
        } else {

        }
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
        $captcha = new GeeCaptcha();

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

    protected function findConfirm($token, $email)
    {
        $confirm = Confirm::whereRaw('code = ? and access = ? and created_at > ?', [$token, $email, Carbon::now()->addDay(-1)])->first();
        if ($confirm) {
            $confirm->delete();
            return $confirm;
        } else {
            return null;
        }
    }

    protected function makeConfirm($access)
    {
        $token = str_random(6);
        Confirm::create(['code' => $token, 'access' => $access]);

        return $token;
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

    private function isFromGithub($payload, $signature)
    {
        return 'sha1=' . hash_hmac('sha1', $payload, config('services.webhook'), false) === $signature;
    }
}
