<?php

Route::get('/', 'DoorController@index');

Route::group(['prefix' => '/door', 'middleware' => ['throttle:5,3']], function ()
{
    Route::post('/register', 'DoorController@register');

    Route::post('/captcha', 'DoorController@captcha');

    Route::post('/login', 'DoorController@login');

    Route::post('/logout', 'DoorController@logout');
});

Route::group(['prefix' => '/bangumi'], function ()
{
    Route::get('/news', 'BangumiController@news');
});