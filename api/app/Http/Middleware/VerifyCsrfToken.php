<?php

namespace App\Http\Middleware;

use Illuminate\Session\TokenMismatchException;
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
        \Log::info($request->ip());
        \Log::info($origin);
        \Log::info($request);
        if (
            in_array($origin, $this->allows) ||
            empty($origin) && $request->ip() === '127.0.0.1'
        ) {
            return $next($request);
        }

        throw new TokenMismatchException;
    }
}
