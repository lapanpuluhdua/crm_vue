<?php


namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Prospect;
use App\Models\User;
use App\Mail\EnquiryMail;
use Mail;

class MailController extends Controller
{
    public function send($id)
    {
    	$enquiry = Prospect::find($id);
    	$time = date('h:i A', strtotime($enquiry['created_at']));

    	$details = [
            'title' => 'Dear Sales Team,',
            'body' => 'A new enquiry has been submitted by '.$enquiry['schoolname'].' at '.$time.' today.'
        ];

        // $users = User::get()->where('roles', 1);
        // foreach ($users as $row) {
        //     $to_email[] = $row['email'];
        // }

        // dd($to_email);

        // $to_email = "ezuan@schoology.com.my";

        $to_email = [
            "amirul@pulsesis.com",
        ];

        Mail::to($to_email)->send(new EnquiryMail($details));
    }
}
