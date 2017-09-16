<?php
function version($path)
{
    static $manifests = [];

    if (! file_exists($manifestPath = public_path('/mix-manifest.json'))) {
        return new Illuminate\Support\HtmlString($path);
    }

    $manifests['/'] = $manifest = json_decode(file_get_contents($manifestPath), true);

    if (! array_key_exists($path, $manifest)) {
        return new Illuminate\Support\HtmlString($path);
    }

    return new Illuminate\Support\HtmlString($manifest[$path]);
}
?>
<!doctype html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <title>Document</title>
    <link rel="stylesheet" href="{{ version('/assets/css/style.css') }}">
</head>
<body>
<div id="app"></div>
<script src="https://cdn.bootcss.com/vue/2.4.2/vue.min.js"></script>
<script src="https://cdn.bootcss.com/vuex/2.4.0/vuex.min.js"></script>
<script src="https://cdn.bootcss.com/vue-router/2.7.0/vue-router.min.js"></script>
<script src="{{ version('/assets/js/manifest.js') }}"></script>
<script src="{{ version('/assets/js/vendor.js') }}"></script>
<script src="{{ version('/assets/js/app.js') }}"></script>
</body>
</html>