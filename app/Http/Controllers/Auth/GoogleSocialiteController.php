<?php
   
namespace App\Http\Controllers\Auth;
   
use App\Http\Controllers\Controller;
use Socialite;
use Auth;
use Exception;
use App\Models\User;
use App\Models\crmUser;
use Illuminate\Http\Request;
use Hash;
use Session;
   
class GoogleSocialiteController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function redirectToGoogle()
    {
        return Socialite::driver('google')->redirect();
    }
       
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function handleCallback()
    {
        try {
     
            $user = Socialite::driver('google')->user();
            
            //$finduser = User::where('email', $user->email)->first();
            $finduser = crmUser::where('email', $user->email)->first();
            
            if($finduser){
                //dd($finduser->createToken('Auth Token'));
                $token = $finduser->createToken('Auth Token')->plainTextToken;
                //Auth::login($finduser);
                //dd($token);
                if(empty($finduser->social_id)){
    
                    $data = crmUser::find($finduser->id);
                    $data->social_id = $user->id;
                    $data->social_type = 'google';
                    $data->profile_photo_url = $user->avatar;

                    $data->save();
                }
                return redirect('/v/login?token='.$token);
      
            

              

                    
     
                Auth::login($newUser);
      
                // return redirect('/v/');
            }
     
        } catch (Exception $e) {
            dd($e);
            dd($e->getMessage());
        }
    }
}