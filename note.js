//
// 👉 Steps :GitHub Login Authentication in Laravel (Laravel, Socialite, Breeze)
// fresh laravel project
// breeze install
// composer require laravel/socialite


// update migration file users table

// github.com/settings/developers


// in env file :
// GITHUB_CLIENT_ID=ccc12c30445534c7f9d14ceb9
// GITHUB_CLIENT_SECRET=03b28bcee6d65awerqrwec2e62b4639370a6b63f7c3974
// GITHUB_CALLBACK_URI=http://127.0.0.1:8000/auth/github/callback

// in confiq/service.php file :

//    'github' => [
//         'client_id' => env('GITHUB_CLIENT_ID'),
//         'client_secret' => env('GITHUB_CLIENT_SECRET'),
//         'redirect' => env('GITHUB_CALLBACK_URI'),
//     ],

// in User model:
//     protected $fillable = [
//         'name',
//         'nickname',
//         'email',
//         'password',
//         'github_id',
//         'auth_type'
//     ];

// Create GithubController :
// php artisan make:controller GithubController




// github.com/settings/developers

// Homepage URL: http://127.0.0.1:8000
// Authentication callback URL: http://127.0.0.1:8000/auth/github/callback
