<?php

Route::get('/', function () {
    return view('welcome');
});

Route::group(['prefix' => '/door'], function () {

    Route::post('/login', 'DoorController@login')->middleware('throttle:5,3');

    Route::post('/register', 'DoorController@register')->middleware('throttle:5,3');

    Route::get('/captcha', 'DoorController@captcha')->middleware('throttle:5,3');

    Route::get('/logout', 'DoorController@logout')->middleware('throttle:5,3');

    Route::get('/404', 'DoorController@index')->middleware('throttle:30');

    Route::get('/star', 'DoorController@index')->middleware('throttle:30');
});