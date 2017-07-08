<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>riuir - 控制台</title>
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body id="login">
    <h1>Sign in to your account</h1>
    <form method="POST" action="{{ route('login') }}">
        {{ csrf_field() }}

        <div>
            <input id="email" placeholder="Username" type="email" name="email" value="{{ old('email') }}" required autofocus>

            @if ($errors->has('email'))
                <span class="help-block">
                    <strong>{{ $errors->first('email') }}</strong>
                </span>
            @endif
        </div>

        <div>
            <input id="password" placeholder="Password" type="password" name="password" required>

            @if ($errors->has('password'))
                <span class="help-block">
                    <strong>{{ $errors->first('password') }}</strong>
                </span>
            @endif
        </div>

        <button type="submit">
            Sign in
        </button>
    </form>
</body>
</html>
