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
    $data['user']=$request->user();
	$data['roles']=$request->user()->getAllRolesAttribute();
	$data['permissions']=$request->user()->getAllPermissionsAttribute();
	
	return $data;
	// return $request->user();
});

Route::post('/login', [AuthController::class, 'login']);
Route::post('/retrievepwd', [AuthController::class, 'retrieve']);
Route::post('/resetpwd', [AuthController::class, 'reset']);
Route::get('/viewresetpwd/(id)', [AuthController::class, 'viewreset']);
Route::post('/register', [AuthController::class, 'register']);

Route::group(['middleware' => ['auth:sanctum']], function () {
    
    Route::post('/logout', [AuthController::class, 'logout']);

    // Route::get('/blankpage', function () {
    //     return view('blankpage', ['title' => 'Blank Page']);
    // });

	Route::get('/users', 'UserController@index')->name('user.index');
	Route::post('/users', 'UserController@create')->name('user.create');
	Route::get('/users/{id}', 'UserController@show')->name('user.show');
	Route::put('/users/{id}', 'UserController@update')->name('user.update');
	Route::delete('/users/{id}', 'UserController@delete')->name('user.delete');

	Route::get('/dashboard', 'DashboardController@index')->name('dashboard.index');
	Route::post('/dashboard', 'DashboardController@create')->name('dashboard.create');
	Route::get('/dashboard/{id}', 'DashboardController@show')->name('dashboard.show');
	Route::put('/dashboard/{id}', 'DashboardController@update')->name('dashboard.update');
	Route::delete('/dashboard/{id}', 'DashboardController@delete')->name('dashboard.delete');

	Route::get('/roles', 'RoleController@index')->name('role.index');
	Route::post('/roles', 'RoleController@create')->name('role.create');
	Route::get('/roles/{id}', 'RoleController@show')->name('role.show');
	Route::put('/roles/{id}', 'RoleController@update')->name('role.update');
	Route::delete('/roles/{id}', 'RoleController@delete')->name('role.delete');

	Route::get('/permissions', 'PermissionController@index')->name('permission.index');
	Route::post('/permissions', 'PermissionController@create')->name('permission.create');
	Route::get('/permissions/{id}', 'PermissionController@show')->name('permission.show');
	Route::put('/permissions/{id}', 'PermissionController@update')->name('permission.update');
	Route::delete('/permissions/{id}', 'PermissionController@delete')->name('permission.delete');

	// Route::get('/enquiries', 'EnquiryController@index')->name('enquiry.index')->middleware('role:Writer');
	// Route::post('/enquiries', 'EnquiryController@create')->name('enquiry.create')->middleware('role:Writer');
	// Route::get('/enquiries/{id}', 'EnquiryController@show')->name('enquiry.show')->middleware('role:Writer');
	// Route::put('/enquiries/{id}', 'EnquiryController@update')->name('enquiry.update')->middleware('role:Writer');
	// Route::delete('/enquiries/{id}', 'EnquiryController@delete')->name('enquiry.delete')->middleware('role:Writer');

	Route::get('/enquiries', 'EnquiryController@index')->name('enquiry.index');
	Route::post('/enquiries', 'EnquiryController@create')->name('enquiry.create');
	Route::get('/enquiries/{id}', 'EnquiryController@show')->name('enquiry.show');
	Route::put('/enquiries/{id}', 'EnquiryController@update')->name('enquiry.update');
	Route::delete('/enquiries/{id}', 'EnquiryController@delete')->name('enquiry.delete');

	Route::get('/enquiriesAssign', 'EnquiryAssignController@index')->name('enquiryassign.index');
	Route::post('/enquiriesAssign', 'EnquiryAssignController@create')->name('enquiryassign.create');
	Route::get('/enquiriesAssign/{id}', 'EnquiryAssignController@show')->name('enquiryassign.show');
	Route::put('/enquiriesAssign/{id}', 'EnquiryAssignController@update')->name('enquiryassign.update');
	Route::delete('/enquiriesAssign/{id}', 'EnquiryAssignController@delete')->name('enquiryassign.delete');

	Route::get('/enquiriesProc', 'EnquiryProcController@index')->name('enquiryproc.index');
	Route::post('/enquiriesProc', 'EnquiryProcController@create')->name('enquiryproc.create');
	Route::get('/enquiriesProc/{id}', 'EnquiryProcController@show')->name('enquiryproc.show');
	Route::put('/enquiriesProc/{id}', 'EnquiryProcController@update')->name('enquiryproc.update');
	Route::delete('/enquiriesProc/{id}', 'EnquiryProcController@delete')->name('enquiryproc.delete');

	Route::get('/comlog', 'ComLogController@index')->name('comlog.index');
	Route::post('/comlog', 'ComLogController@create')->name('comlog.create');
	Route::get('/comlog/{id}', 'ComLogController@show')->name('comlog.show');
	Route::put('/comlog/{id}', 'ComLogController@update')->name('comlog.update');
	Route::delete('/comlog/{id}', 'ComLogController@delete')->name('comlog.delete');

	Route::get('/products', 'ProductController@index')->name('product.index');
	Route::post('/products', 'ProductController@create')->name('product.create');
	Route::get('/products/{id}', 'ProductController@show')->name('product.show');
	Route::put('/products/{id}', 'ProductController@update')->name('product.update');
	Route::delete('/products/{id}', 'ProductController@delete')->name('product.delete');

	Route::get('/subscription', 'SubscriptionController@index')->name('subscription.index');
	Route::post('/subscription', 'SubscriptionController@create')->name('subscription.create');
	Route::get('/subscription/{id}', 'SubscriptionController@show')->name('subscription.show');
	Route::put('/subscription/{id}', 'SubscriptionController@update')->name('subscription.update');
	Route::delete('/subscription/{id}', 'SubscriptionController@delete')->name('subscription.delete');
	
	Route::get('/permission/{permissionName}', 'PermissionController@check');
	
});

Route::get('/schools', 'SchoolController@index')->name('school.index');
Route::post('/schools', 'SchoolController@create')->name('school.create');
Route::get('/schools/{id}', 'SchoolController@show')->name('school.show');
Route::put('/schools/{id}', 'SchoolController@update')->name('school.update');
Route::delete('/schools/{id}', 'SchoolController@delete')->name('school.delete');

Route::post('/enquiries/store', 'EnquiryController@create');



