<?php

use App\Http\Controllers\AuthController;
use App\Models\User;
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

// Protecting Routes
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);

Route::group(['middleware' => ['auth:sanctum']], function () {
    
    Route::post('/logout', [AuthController::class, 'logout']);

    // Route::get('/blankpage', function () {
    //     return view('blankpage', ['title' => 'Blank Page']);
    // });

	Route::get('/users', 'UserController@index');
	Route::post('/users', 'UserController@create');
	Route::get('/users/{id}', 'UserController@show');
	Route::put('/users/{id}', 'UserController@update');
	Route::delete('/users/{id}', 'UserController@delete');

	Route::get('/dashboard', 'DashboardController@index');
	Route::post('/dashboard', 'DashboardController@create');
	Route::get('/dashboard/{id}', 'DashboardController@show');
	Route::put('/dashboard/{id}', 'DashboardController@update');
	Route::delete('/dashboard/{id}', 'DashboardController@delete');

	Route::get('/roles', 'RoleController@index');
	Route::post('/roles', 'RoleController@create');
	Route::get('/roles/{id}', 'RoleController@show');
	Route::put('/roles/{id}', 'RoleController@update');
	Route::delete('/roles/{id}', 'RoleController@delete');

	Route::get('/enquiries', 'EnquiryController@index');
	Route::post('/enquiries', 'EnquiryController@create');
	Route::get('/enquiries/{id}', 'EnquiryController@show');
	Route::put('/enquiries/{id}', 'EnquiryController@update');
	Route::delete('/enquiries/{id}', 'EnquiryController@delete');

	Route::get('/enquiriesAssign', 'EnquiryAssignController@index');
	Route::post('/enquiriesAssign', 'EnquiryAssignController@create');
	Route::get('/enquiriesAssign/{id}', 'EnquiryAssignController@show');
	Route::put('/enquiriesAssign/{id}', 'EnquiryAssignController@update');
	Route::delete('/enquiriesAssign/{id}', 'EnquiryAssignController@delete');

	Route::get('/enquiriesProc', 'EnquiryProcController@index');
	Route::post('/enquiriesProc', 'EnquiryProcController@create');
	Route::get('/enquiriesProc/{id}', 'EnquiryProcController@show');
	Route::put('/enquiriesProc/{id}', 'EnquiryProcController@update');
	Route::delete('/enquiriesProc/{id}', 'EnquiryProcController@delete');

	Route::get('/comlog', 'ComLogController@index');
	Route::post('/comlog', 'ComLogController@create');
	Route::get('/comlog/{id}', 'ComLogController@show');
	Route::put('/comlog/{id}', 'ComLogController@update');
	Route::delete('/comlog/{id}', 'ComLogController@delete');

	Route::get('/products', 'ProductController@index');
	Route::post('/products', 'ProductController@create');
	Route::get('/products/{id}', 'ProductController@show');
	Route::put('/products/{id}', 'ProductController@update');
	Route::delete('/products/{id}', 'ProductController@delete');

	Route::get('/subscription', 'SubscriptionController@index');
	Route::post('/subscription', 'SubscriptionController@create');
	Route::get('/subscription/{id}', 'SubscriptionController@show');
	Route::put('/subscription/{id}', 'SubscriptionController@update');
	Route::delete('/subscription/{id}', 'SubscriptionController@delete');

	
});

Route::get('/schools', 'SchoolController@index');
Route::post('/schools', 'SchoolController@create');
Route::get('/schools/{id}', 'SchoolController@show');
Route::put('/schools/{id}', 'SchoolController@update');
Route::delete('/schools/{id}', 'SchoolController@delete');

Route::post('/enquiries/store', 'EnquiryController@create');



