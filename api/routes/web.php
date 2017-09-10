<?php

Route::get('/', 'DoorController@index');

Route::post('/deploy', 'DoorController@deploy');

Route::group(['prefix' => '/door'], function ()
{
    Route::get('/captcha', 'DoorController@captcha');

    Route::post('/check/{method}/{access}', 'DoorController@checkAccessUnique');

    Route::post('/send', 'DoorController@sendEmailOrMessage');

    Route::post('/register', 'DoorController@register');

    Route::post('/login', 'DoorController@login');

    Route::get('/logout', 'DoorController@logout');
});

Route::group(['prefix' => '/bangumi'], function ()
{
    Route::get('/news', 'BangumiController@news');

    Route::get('/tags', 'BangumiController@tags');

    Route::group(['prefix' => '/{id}'], function ()
    {
        Route::get('/info', 'BangumiController@info');
    });
});

Route::group(['prefix' => '/video'], function ()
{
    Route::group(['prefix' => '/{id}'], function ()
    {
        Route::get('/info', 'VideoController@info');

        Route::post('/playing', 'VideoController@playing');
    });
});

Route::group(['prefix' => '/cartoon'], function ()
{
    Route::get('/banner', 'DoorController@banner');
});