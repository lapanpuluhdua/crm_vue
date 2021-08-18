<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Enquiry;
use App\Models\Prospect;
use App\Mail\EnquiryMail;
use App\Models\crmEnquiry;
use Mail;

class EnquiryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //return view('enquiry.enquiryform');
        return crmEnquiry::orderBy('id', 'desc')->get();
    }

    public function list()
    {
        $prospects = Prospect::get();

        return view('enquiry.list',[

            'prospects'=>$prospects,
            'title' => 'Enquiry List'

        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $currentDate = date("Y-m-d");
        //validation
        // $this->validate($request,[

        //     'name'=>'required|max:255',
        //     'contact'=>'required|min:7|max:15',
        //     'email'=>'required|email|max:255',
            
        // ]);

        //dd('store');

        $save = Prospect::create([

            'name'=>$request->name,
            'designation'=>$request->designation,
            'email'=>$request->email,
            'contactno'=>$request->contactno,
            'schoolname'=>$request->schoolname,
            'website'=>$request->website,
            'enquirydate'=>$currentDate,
            'enquirydetails'=>$request->enquirydetails,

        ]);

        $last_id = $save->id;
        $sendEmail = new MailController();
        $sendEmail->send($last_id);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {

        //dd($request['id']);

        $Prospect = Prospect::find($id);
        $Prospect->name = $request['name'];
        $Prospect->designation = $request['designation'];
        $Prospect->email = $request['email'];
        $Prospect->contactno = $request['contactno'];
        $Prospect->schoolname = $request['schoolname'];
        $Prospect->website = $request['website'];
        $Prospect->enquirydetails = $request['enquirydetails'];
        $Prospect->save();
        
        $prospects = Prospect::get();

        return view('enquiry.list',[

            'prospects'=>$prospects,
            'title' => 'Enquiry List'

        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function delete($id)
    {

        // $prospects = Prospect::where('id', $id)->delete();

        // $prospects = Prospect::get();

        // return view('enquiry.list',[

        //     'prospects'=>$prospects,
        //     'title' => 'Enquiry List'
        // ]);    
        $prospects = Prospect::find($id);
        $prospects->delete();
        return $prospects;
        
    }

    public function enquiry_data()
    {
        $enquiryData = Enquiry::get();
        return json_encode(array('data' => $enquiryData));
    }

    public function details($id)
    {
        $prospects = Prospect::get()->where('id', $id);

        foreach ($prospects as $prospect) {
            $id = $prospect['id'];
            $name = $prospect['name'];
            $designation = $prospect['designation'];
            $email = $prospect['email'];
            $contactno = $prospect['contactno'];
            $schoolname = $prospect['schoolname'];
            $enquirydate = $prospect['enquirydate'];
            $enquirydetails = $prospect['enquirydetails'];
        }
        

        return view('enquiry.details',[

            'id' => $id,
            'name' => $name,
            'designation' => $designation,
            'email' => $email,
            'contactno' => $contactno,
            'schoolname' => $schoolname,
            'enquirydate' => $enquirydate,
            'enquirydetails' => $enquirydetails,

        ]);
    }

}
