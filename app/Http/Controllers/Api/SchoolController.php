<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\crmSchool;

class SchoolController extends Controller
{
    public function index(Request $request){
    	return crmSchool::orderBy('created_at', 'desc')->get();
    }

    public function create(Request $request){
    	return crmSchool::create([
    		'name' => $request->name,
    	]);
    }

    public function show(Request $request, $id){
    	return crmSchool::find($id);
    }

    public function update(Request $request, $id){
    	$this->validate($request, [
    		'name' => 'required'
    	]);
    	crmSchool::where('id', $id)->update([
    		'name' => $request->name,
    	]);

    	return crmSchool::find($id);
    }

    public function delete(Request $request, $id){
    	return crmSchool::where('id', $id)->delete();
    }
}
