@extends('layouts.app')

@section('content')
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
@endsection
