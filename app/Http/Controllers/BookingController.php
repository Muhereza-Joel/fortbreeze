<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Mail\BookingMail;
use Illuminate\Support\Facades\Mail;

class BookingController extends Controller
{
    public function send(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email',
            'phone' => 'required|string|max:50',
            'service' => 'required|string|max:255',
            'date' => 'required|date',
            'message' => 'nullable|string',
        ]);

        // Recipients (officials + optional sender)
        $recipients = [
            'sales@fortbreezehotel.com',
            'muherezajoel40@gmail.com',
            $validated['email'] // send to the user as well
        ];

        foreach ($recipients as $email) {
            Mail::to($email)->send(new BookingMail($validated));
        }

        return back()->with('success', 'Your booking request has been sent successfully!');
    }
}
