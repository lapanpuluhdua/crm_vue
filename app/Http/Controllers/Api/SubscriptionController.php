<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\crmSubscription;
use App\Models\crmEnquiry;
use App\Models\crmSchool;

use Illuminate\Support\Facades\DB;

class SubscriptionController extends Controller
{
    public function index(Request $request){

        // $results = crmSubscription::join('crm_schools', 'crm_schools.id', '=', 'crm_subscriptions.school_id')
        //             ->select('crm_subscriptions.*', 'crm_schools.company_name')
        //             ->get();

		$results = crmSchool::join('crm_subscriptions', 'crm_schools.id', '=', 'crm_subscriptions.school_id')
                    ->select('crm_schools.id','company_name')
					->distinct()
                    ->get();

    	return $results;
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
    		'enquirydetails' => $request->enquirydetails
    	]);

    	return crmEnquiry::find($id);
    }

    public function delete(Request $request, $id){
    	return crmEnquiry::where('id', $id)->delete();
    }
}
