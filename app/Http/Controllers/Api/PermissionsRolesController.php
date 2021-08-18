<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\crmPermssionsroles;

class PermissionsRolesController extends Controller
{
    public function index(Request $request){
    	return crmPermssionsroles::orderBy('id', 'asc')->get();
    }
    public function update(Request $request, $id){
    	$this->validate($request, [
    		'name' => 'required',
    	]);
        crmPermssionsroles::where('id', $id)->update([
        'permission_id' => $request->id,
        'roles_id' => $request->role_names['roleid'],
    ]);
}