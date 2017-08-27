<?php

namespace App\Http\Middleware;

use Closure;

class Csrf
{
    protected $allows = [
        'https://www.riuir.com',
        'https://m.riuir.com'
    ];

    public function handle($request, Closure $next)
    {
        $origin = $request->headers->get('Origin');
        if (
            in_array($origin, $this->allows) ||
            empty($origin) && $request->ip() === '127.0.0.1'
        ) {
            return $next($request);
        }

        return response('token mismatch exception', 500);
    }
}
