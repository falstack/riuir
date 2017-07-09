<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>riuir - 控制台</title>
    <!-- Styles -->
    <link href="https://cdn.bootcss.com/element-ui/1.3.7/theme-default/index.css" rel="stylesheet">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <script src="//cdn.bootcss.com/vue/2.3.4/vue.min.js"></script>
    <script src="//cdn.bootcss.com/axios/0.16.2/axios.min.js"></script>
    <script src="//cdn.bootcss.com/element-ui/1.3.7/index.js"></script>
    <script src="//cdn.bootcss.com/moment.js/2.18.1/moment.min.js"></script>
    <script>
      Vue.prototype.$http = axios
    </script>
</head>
<body>
    <div id="app">
        @include('layouts.sidebar')
        <div id="main">
            @include('layouts.navbar')
            <div id="container">
                @yield('content')
            </div>
        </div>
    </div>
    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>