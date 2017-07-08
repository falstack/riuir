<?php

Route::get('/', 'PageController@index');

Route::get('login', 'LoginController@showLoginForm')->name('login');
Route::post('login', 'LoginController@login');

Route::group(['middleware' => ['auth']], function ()
{
    Route::post('logout', 'LoginController@logout')->name('logout');

    Route::get('register', 'RegisterController@showRegistrationForm')->name('register');
    Route::post('register', 'RegisterController@register');


    Route::group(['prefix' => 'bangumi'], function () {
        Route::get('/', 'PageController@bangumi')->name('bangumi');
    });

    Route::group(['prefix' => 'banner'], function () {
        Route::get('/', 'PageController@banner')->name('banner');
    });
});
