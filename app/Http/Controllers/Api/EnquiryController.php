<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\crmEnquiry;

class EnquiryController extends Controller
{
    public function index(Request $request){
    	return crmEnquiry::whereNull('status')
							->orwhere('status','=','')
							->orderBy('id', 'asc')->get();
    }

    public function create(Request $request){
    	$request->enquirydate = date('Y-m-d H:i:s');
    	return crmEnquiry::create([
    		'name' => $request->name,
    		'designation' => $request->designation,
    		'email' => $request->email,
    		'contactno' => $request->contactno,
    		'schoolname' => $request->schoolname,
    		'website' => $request->website,
    		'enquirydate' => date('Y-m-d H:i:s'),
    		'enquirydetails' => $request->enquirydetails
    	]);
    }

    public function show(Request $request, $id){
    	return crmEnquiry::find($id);
    }

    public function update(Request $request, $id){
    	$this->validate($request, [
    		'name' => 'required'
    	]);
    	crmEnquiry::where('id', $id)->update([
    		'name' => $request->name,
    		'designation' => $request->designation,
    		'email' => $request->email,
    		'contactno' => $request->contactno,
    		'schoolname' => $request->schoolname,
    		'website' => $request->website,
    		'enquirydetails' => $request->enquirydetails,
			'status' => $request->status,
			'manager_name' => $request->amdata['amname'],
			'manager_id' => $request->amdata['amid']
    	]);

    	return crmEnquiry::find($id);
    }

    public function delete(Request $request, $id){
    	return crmEnquiry::where('id', $id)->delete();
    }
}
