<?php

namespace App\Http\Controllers;
use Exception;
use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Laravel\Socialite\Facades\Socialite;

class GoogleController extends Controller
{
    public function redirect()
    {
        return Socialite::driver('google')->redirect();
    }

    public function callback()
    {
        try {
            $user = Socialite::driver('google')->user();
            // dd($user);

            $googleUser = User::updateOrCreate([
                'google_id' => $user->id,
            ],[
                'name' => $user->name,
                'nickname' => $user->nickname,
                'email' => $user->email,
                'google_token' => $user->token,
                'auth_type' => 'google',
                'password' => Hash::make(Str::random(10))
            ]);

            Auth::login($googleUser);

            return redirect()->route('dashboard');
        } catch(Exception $e) {
            dd($e->getMessage());
        }
    }
}
