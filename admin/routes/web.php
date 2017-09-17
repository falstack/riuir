<?php

Route::get('/', 'PageController@index');

Route::get('/new', 'PageController@new');

Route::get('login', 'LoginController@showLoginForm')->name('login');
Route::post('login', 'LoginController@login');

Route::group(['middleware' => ['auth']], function ()
{
    Route::post('logout', 'LoginController@logout')->name('logout');

    Route::get('register', 'RegisterController@showRegistrationForm')->name('register');
    Route::post('register', 'RegisterController@register');


    Route::group(['prefix' => 'bangumi'], function ()
    {
        Route::get('/', 'PageController@bangumi')->name('bangumi');

        Route::post('/create', 'BangumiController@create');

        Route::post('/edit', 'BangumiController@edit');

        Route::post('/delete', 'BangumiController@delete');
    });

    Route::group(['prefix' => 'video'], function ()
    {
        Route::get('/', 'PageController@video')->name('video');

        Route::post('/create', 'VideoController@create');

        Route::post('/edit', 'VideoController@edit');

        Route::post('/delete', 'VideoController@delete');
    });

    Route::group(['prefix' => 'banner'], function ()
    {
        Route::get('/', 'PageController@banner')->name('banner');
    });

    Route::group(['prefix' => 'tag'], function ()
    {
        Route::get('/', 'PageController@tag')->name('tag');

        Route::post('/create', 'TagController@create');

        Route::post('/edit', 'TagController@edit');
    });

    Route::get('/tools', 'PageController@tools');
});
