<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as BaseVerifier;

class Csrf extends BaseVerifier
{
    protected $allows = [
        'https://www.riuir.com',
        'https://m.riuir.com',
        'http://riuir.dev'
    ];

    protected $except = [
        'door/csrf'
    ];

    public function handle($request, Closure $next)
    {
        $origin = $request->headers->get('Origin');
        if (
            ! in_array($origin, $this->allows) &&
            ! (empty($origin) && $request->ip() === '127.0.0.1')
        ) {
            return response('token mismatch exception', 500);
        }

        if (
            $this->runningUnitTests() ||
            $this->inExceptArray($request) ||
            $this->tokensMatch($request)
        ) {
            return $this->addCookieToResponse($request, $next($request));
        }

        return response('token mismatch exception', 500);
    }

    protected function getTokenFromRequest($request)
    {
        $token = $request->cookie('XSRF-TOKEN');
        if (! $token && $header = $request->header('X-XSRF-TOKEN')) {
            $token = $this->encrypter->decrypt($header);
        }
        return $token;
    }
}
