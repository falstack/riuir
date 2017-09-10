<?php

namespace App\Http\Controllers;

use App\Http\Requests\User\RegisterRequest;
use App\Mail\Test;
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

    public function checkAccessUnique($method, $access)
    {
        return in_array($method, ['phone', 'email'])
            ? User::where($method, $access)->count()
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
            Mail::send(new Welcome($access, $nickname, $token));
        } else {
            // TODO: send phone message
        }
    }

    public function register(RegisterRequest $request)
    {
        $method = $request->get('method');
        $access = $request->get('access');

        if ($this->checkAccessUnique($method, $access)) {
            return response('该手机或邮箱已绑定另外一个账号', 403);
        }

        if ($this->checkAuthCode($request->get('authCode'), $access)) {
            return response('验证码无效或已失效', 403);
        }

        $nickname = $request->get('nickname');
        $zone = $this->createUserZone($nickname);
        $arr = [
            'nickname' => $nickname,
            'password' => $request->get('secret'),
            'zone' => $zone
        ];

        $data = $request->get('method') === 'phone'
            ? array_merge($arr, ['phone' => $request->get('access')])
            : array_merge($arr, ['email' => $request->get('access')]);

        $user = User::create($data);
        Auth::login($user);

        setcookie('JWT-TOKEN', JWTAuth::fromUser($user), time() + 1296000);
        return null;
    }

    public function captcha()
    {
        $captcha = new GeeCaptcha();

        return $captcha->GTServerIsNormal();
    }

    public function login(Request $request)
    {
        $data = $request->get('method') === 'phone'
            ? [
                'password' => $request->get('secret'),
                'phone' => $request->get('access')
            ]
            : [
                'password' => $request->get('secret'),
                'email' => $request->get('access')
            ];

        if (Auth::attempt($data, $request->get('remember')))
        {
            $user = Auth::user();

            setcookie('JWT-TOKEN', JWTAuth::fromUser($user), time() + 1296000);
            return null;
        }

        return response('用户名或密码错误', 422);
    }

    public function logout()
    {
        Auth::logout();
    }

    public function refresh()
    {
        return $this->getAuthUser();
    }

    protected function checkAuthCode($code, $access)
    {
        $confirm = Confirm::whereRaw('code = ? and access = ? and created_at > ?', [$code, $access, Carbon::now()->addDay(-1)])->first();
        if (is_null($confirm)) {
            return true;
        }

        $confirm->delete();
        return false;
    }

    protected function makeConfirm($access)
    {
        $token = Confirm::whereRaw('access = ? and created_at > ?', [$access, Carbon::now()->addDay(-1)])->first();
        if ( ! is_null($token)) {
            return $token->code;
        }

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

    private function isFromGithub($payload, $signature)
    {
        return 'sha1=' . hash_hmac('sha1', $payload, config('services.webhook'), false) === $signature;
    }
}
