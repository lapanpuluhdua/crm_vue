<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\GoogleSocialiteController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
	return redirect()->route('vue');
});

// ------------------------------ google login -------------------------------
Route::get('auth/google', [GoogleSocialiteController::class, 'redirectToGoogle']);
Route::get('auth/google/callback', [GoogleSocialiteController::class, 'handleCallback']);

// ----------------------------- facebook login ------------------------------
// Route::get('auth/facebook', [FacebookSocialiteController::class, 'redirectToFB']);
// Route::get('auth/facebook/callback', [FacebookSocialiteController::class, 'handleCallback']);
Route::get('auth/facebook', 'Auth\FacebookSocialiteController@redirectToFB');
Route::get('auth/facebook/callback', 'Auth\FacebookSocialiteController@handleCallback');


Route::get('/v/{any?}', function () {
    
	//dashforge template
    // return view('vue.dashforge');

    //cork template
    return view('vue.unipro');
})->name('vue');
