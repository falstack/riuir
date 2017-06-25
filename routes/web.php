<?php

Route::get('/', 'DoorController@index');

Route::group(['prefix' => '/door'], function ()
{
    Route::post('/register', 'DoorController@register')->middleware('throttle:5,3');

    Route::post('/captcha', 'DoorController@captcha')->middleware('throttle:5,3');

    Route::post('/login', 'DoorController@login')->middleware('throttle:5,3');

    Route::post('/logout', 'DoorController@logout')->middleware('throttle:5,3');

    Route::get('/dispatchToken', 'DoorController@dispatchToken');

    Route::get('/useToken', 'DoorController@useToken')->middleware('jwt.auth');

    Route::get('/refreshToken', 'DoorController@refreshToken')->middleware('jwt.refresh');
});