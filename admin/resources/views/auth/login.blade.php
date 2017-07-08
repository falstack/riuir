<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>riuir - 控制台</title>
    <style>
        body,html{height:100%}#login{margin:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-family:Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif}#login *{margin:0;padding:0;-webkit-box-sizing:border-box;box-sizing:border-box}#login h1{font-size:30px;line-height:42px;font-weight:300;margin-bottom:20px;text-align:center;color:#525255}#login form{width:360px;height:280px}#login form div{margin-bottom:20px}#login form div input{color:#888;width:100%;height:42px;outline-width:0;border:1px solid #e5e5e5;-webkit-transition:all .2s linear;transition:all .2s linear;-webkit-transition-property:border,background,color,padding,-webkit-box-shadow;transition-property:border,background,color,padding,-webkit-box-shadow;transition-property:border,background,color,box-shadow,padding;transition-property:border,background,color,box-shadow,padding,-webkit-box-shadow;padding:4px 6px;font-size:16px;font-family:inherit;letter-spacing:1px}#login form div input:focus{border-color:#489be0;outline-width:0;background:#fff;color:#888}#login form div input:-webkit-autofill{-webkit-box-shadow:0 0 0 100px #e9fbfe inset!important;box-shadow:inset 0 0 0 100px #e9fbfe!important;background-color:#e9fbfe!important;border-color:#e4f4f9!important}#login form div input::-webkit-input-placeholder{color:#888;letter-spacing:1px;font-family:inherit}#login form div input:-ms-input-placeholder{color:#888;letter-spacing:1px;font-family:inherit}#login form div input::placeholder{color:#888;letter-spacing:1px;font-family:inherit}#login form div span{margin:4px 6px}#login form div span strong{display:inline-block;margin:20px 0 10px;color:#bf5329}#login form button{width:100%;height:55px;line-height:55px;font-size:18px;text-align:center;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out;background-color:#489be0;color:#fff;border-color:transparent;border-width:0;font-family:inherit;cursor:pointer}#login form button:hover{background-color:#3a94e0}#login form button:focus{outline-width:0}
    </style>
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
