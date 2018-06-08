<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['prefix' => 'rooms'], function () {
    Route::get('all', 'RoomController@index');
    Route::get('{room}', 'RoomController@select');
    Route::post('', 'RoomController@store');
    Route::put('{room}', 'RoomController@update');
    Route::delete('{room}', 'RoomController@destroy');
});

Route::group(['prefix' => 'events'], function () {
    Route::get('all', 'EventController@index');
    Route::get('{event}', 'EventController@select');
    Route::post('', 'EventController@store');
    Route::put('{event}', 'EventController@update');
    Route::delete('{event}', 'EventController@destroy');
});

Route::group(['prefix' => 'bookings'], function () {
    Route::post('', 'BookingController@store');
    Route::put('{booking}', 'BookingController@update');
    Route::delete('{booking}', 'BookingController@destroy');
});