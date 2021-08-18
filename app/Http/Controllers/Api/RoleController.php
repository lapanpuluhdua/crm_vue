<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\crmRole;

class RoleController extends Controller
{
    public function index(Request $request){
    	return crmRole::orderBy('name', 'asc')->get();
    }

    public function create(Request $request){
    	$this->validate($request, [
    		'name' => 'required|unique:crm_roles',
			// 'description' => 'required',
    	]);
    	return crmRole::create([
    		'name' => $request->name,
			// 'description' => $request->description,
    		'guard_name' => 'sanctum'
    	]);
    }

    public function show(Request $request, $id){
    	return crmRole::find($id);
    }

    public function update(Request $request, $id){
    	$this->validate($request, [
    		'name' => 'required',
			// 'description' => 'required',

    	]);
    	crmRole::where('id', $id)->update([
    		'name' => $request->name,
			// 'description' => $request->description,
    		// 'guard_name' => 'api'
    	]);

    	return crmRole::find($id);
    }

    public function delete(Request $request, $id){
    	return crmRole::where('id', $id)->delete();
    }
}
