<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(){
        if(Auth::attempt([
            'username' => request('username'),
            'password' => request('password')
        ])){
            $user = Auth::user();
            $success['token'] = $user->createToken('agora-booking-system')->accessToken;
            $success['username'] = $user->username;

            $response = [
                'success' => $success
            ];

            return response()->json($response, 200);
        }
        else{
            return response()->json(['error' => 'Incorrect credententials. Please check username or password.'], 401);
        }
    }
}
