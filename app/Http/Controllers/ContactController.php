<?php

namespace App\Http\Controllers;

use App\Mail\ContactUsMail;
use App\Mail\ThankYouMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function send(Request $request)
    {
        $validated = $request->validate([
            'firstName' => 'required|string|max:255',
            'lastName' => 'nullable|string|max:255',
            'email' => 'required|email',
            'message' => 'required|string',
        ]);

        $recipients = [
            'muherezajoel40@gmail.com',
            'info@fortbreezehotel.com', // add more emails here
        ];

        foreach ($recipients as $email) {
            Mail::to($email)->send(new ContactUsMail($validated));
        }

        Mail::to($validated['email'])->send(new ThankYouMail($validated));

        return back()->with('success', 'Your message has been sent successfully!');
    }
}
