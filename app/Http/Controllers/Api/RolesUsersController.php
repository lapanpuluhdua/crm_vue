<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\crmRolesusers;

class RoleUsersController extends Controller
{
    public function index(Request $request){
    	return crmRolesusers::orderBy('id', 'asc')->get();
    }
    public function update(Request $request, $id){
    	$this->validate($request, [
    		'name' => 'required',
    	]);
    crmRolesusers::where('id', $id)->update([
        // 'user_id' => $request->id,

        // 'roles_id' => $request->role_names['roleid'],
        // 'roles_name' => $request->role_names['rolename'],
        'model_id' => $request->id,
        'model_type' => 'App\Models\crmUser',
        'role_id' => $request->role_names['roleid'],
    ]);
}