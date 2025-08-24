<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
})->name('root');

Route::get('/home', function () {
    return Inertia::render('Home');
})->name('home');

Route::get('/about-us', function () {
    return Inertia::render('About');
})->name('about');

Route::get('/our-services', function () {
    return Inertia::render('OurServices');
})->name('services');

Route::get('/rooms', function () {
    return Inertia::render('Rooms');
})->name('rooms');

Route::get('/restaurant-and-bar', function () {
    return Inertia::render('RestaurantAndBar');
})->name('restaurant');

Route::get('/contact-us', function () {
    return Inertia::render('ContactUs');
})->name('contact');

Route::get('/booking', function () {
    return Inertia::render('Booking');
})->name('booking');

Route::get('/privacy-policy', function () {
    return Inertia::render('PrivacyPolicy');
})->name('privacy');

Route::get('/terms-of-service', function () {
    return Inertia::render('TermsOfService');
})->name('terms');

Route::get('/frequently-asked-questions', function () {
    return Inertia::render('FAQ');
})->name('faq');

Route::get('/careers', function () {
    return Inertia::render('Careers');
})->name('careers');

Route::post('/contact/send', [ContactController::class, 'send'])->name('contact.send');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::fallback(function () {
    return Inertia::render('NotFound');
})->name('not-found');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
