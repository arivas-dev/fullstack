<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::get('demo','ProductController@index')->name('api.v1.products.index');

//PRODUCTS ROUTE
Route::group(['middleware' => ['jwt.verify']], function() {
    Route::get('products/{product}','ProductController@show')->name('api.v1.products.show');
    Route::get('products','ProductController@index')->name('api.v1.products.index');
    Route::post('products','ProductController@store')->name('api.v1.products.store');
    Route::patch('products/{id}','ProductController@update')->name('api.v1.products.update');
    Route::delete('products/{id}','ProductController@delete')->name('api.v1.products.delete');
});

// USER ROUTES
Route::group(['middleware' => ['jwt.verify']], function() {
    Route::patch('user/{id}','UserController@update')->name('api.v1.update.update');
});

// USER ROUTES
Route::group(['middleware' => ['jwt.verify']], function() {
    Route::put('user','UserController@update')->name('api.v1.user.update');
    Route::get('user','UserController@index')->name('api.v1.users.index');
    Route::get('user/{id}','UserController@show')->name('api.v1.user.show');
    Route::delete('user/{id}','UserController@delete')->name('api.v1.products.delete');
});





Route::post('register', 'JwtAuthController@register');

Route::post('login', 'JwtAuthController@login');