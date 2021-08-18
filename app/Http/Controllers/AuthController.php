<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\crmUser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

use Illuminate\Support\Str;
use Carbon\Carbon;
use DB;
use Mail;
use Hash;

class AuthController extends Controller
{
    public function register(Request $request){

        $validator = Validator::make($request->all(),[
            'name' => 'required',
            'email' => 'required',
            'password' => 'required|string|min:6'
        ]);

        if ($validator->fails()) {
            // return response()->json(['status_code'=>400, 'message'=>'Bad Request']);
            return response(['message'=>'Bad Request'], 400);
        }

        $user = crmUser::create([
            'name' => $request->name,
            'password' => bcrypt($request->password),
            'email' => $request->email
        ]);

        // return response()->json(['status_code'=>200, 'message'=>'User Register successfully']);
        return response(['message'=>'User Register successfully'], 200);
    }

    public function login(Request $request){

        $validator = Validator::make($request->all(),[
            'email' => 'required',
            'password' => 'required|string|min:6'
        ]);

        // dd($request->all());

        if ($validator->fails()) {
            return response(['message'=>'Username or Password don\'t match'], 401);
            // return response()->json(['status_code'=>400, 'message'=>'Username or Password don\'t match']);
        }

        // $credentials = request(['email', 'password']);
        $credentials = $request->only('email', 'password');

        if (!Auth::attempt($credentials)) {
            return response(['message'=>'Username or Password don\'t match'], 401);
            // return response()->json(['status_code'=>500, 'message'=>'Username or Password don\'t match']);
        }

        $user = crmUser::where('email', $request->email)->first();
        $token = $user->createToken('Auth Token')->plainTextToken;

        return response(['token'=>$token], 200);
        // return response()->json(['status_code'=>200, 'token'=>$token]);
    }

    public function logout(Request $request)
    {
        if(method_exists($request->user()->currentAccessToken(), 'delete')){
            $request->user()->currentAccessToken()->delete();
        }else{
            Auth::guard('web')->logout();
        }

        return response(['message' => 'Token deleted successfully!'], 200);
        // return response()->json(['status_code'=>200, 'message'=>'Token deleted successfully!']);
    }

    public function retrieve(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email|exists:crm_users',
        ]);

        if ($validator->fails()) {
            return response(['message' => 'Email not found / registered !'], 400);
        }

        $token = Str::random(64);

        DB::table('laravel_password_resets')->insert([
            'email' => $request->email,
            'token' => $token,
            'created_at' => Carbon::now()
        ]);

        Mail::send('email.forgetPassword', ['token' => $token, 'email' => $request->email], function ($message) use ($request) {
            $message->to($request->email);
            $message->subject('CRM Reset Password');
        });

        // return back()->with('message', 'We have e-mailed your password reset link!');
        return response(['message' => 'We have e-mailed your password reset link!'], 200);
    }

    public function viewreset(Request $request)
    {
        return $request;
    }

    public function reset(Request $request)
    {
        $tokenstr = $request;
        $updatePassword = DB::table('laravel_password_resets')
            ->where('token',$request->token)
            ->get();
        
        if (!$updatePassword) {
            return response(['message' => 'Invalid token !'], 400);
        }

        $user = crmUser::where('email', $updatePassword[0]->email)
             ->update(['password' => bcrypt($request->password)]);

        DB::table('laravel_password_resets')->where(['email' => $request->email])->delete();

        return response(['message' => 'Your password has been changed!'], 200);
    }
}
