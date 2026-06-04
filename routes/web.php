<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');
Route::inertia('/about-us', 'about-us')->name('about-us');
Route::inertia('/contact', 'contact')->name('contact');
Route::inertia('/forex', 'forex')->name('forex');
Route::inertia('/indices', 'indices')->name('indices');
Route::inertia('/commodities', 'commodities')->name('commodities');
Route::inertia('/cfds', 'cfds')->name('cfds');
Route::inertia('/futures', 'futures')->name('futures');
Route::inertia('/shares', 'shares')->name('shares');
Route::inertia('/account-types', 'account-types')->name('account-types');
Route::inertia('/platform', 'platform')->name('platform');
Route::inertia('/legal', 'legal')->name('legal');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

require __DIR__.'/settings.php';
