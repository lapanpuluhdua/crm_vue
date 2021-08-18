<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\crmUser;
use App\Models\crmPermission;

use App\Models\crmRole;
use App\Models\crmRolesusers;

use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Illuminate\Support\Facades\Auth;
class UserController extends Controller
{
    public function index(Request $request){
		// Role::create(['name'=>'Admin']);
		// Permission::create(['name'=>'Create']);

		// $permission = Permission::create(['name'=>'test4']);

		// $role = Role::findById(3);
		// $permission = Permission::findById(6);
		// $role->givePermissionTo($permission);
		
		
		// $role = Role::findByName('Admin');
		// $permission = Permission::findByName('Enquiry Create');
		// $role->givePermissionTo($permission);

		// $permission = Permission::findByName('Enquiry View');
		// $role->givePermissionTo($permission);

		// $permission = Permission::findByName('Enquiry Update');
		// $role->givePermissionTo($permission);

		// $permission = Permission::findByName('Enquiry Delete');
		// $role->givePermissionTo($permission);
		
		// $role = Role::findById(2);
		// $permission = Permission::findById(1);
		// $role->givePermissionTo($permission);
		// $permission->removeRole($role);
		// $role->revokePermissionTo($permission);
		// $permission = Permission::findById(3);
		// auth()->user(999)->givePermissionTo($permission);

		// auth()->user()->assignRole($role);
		// return auth()->user()->getAllpermissions();
		// return crmUser::role('Admin')->get();
		// return crmUser::permission('View')->get();

		// return auth()->user()->revokePermissionTo($permission);
    	return crmUser::orderBy('name', 'asc')->get();
    }
	// public function getAllPermissionsAttribute() {
	// 	$permissions = [];
	// 	  foreach (Permission::all() as $permission) {
	// 		if (Auth::user()->can($permission->name)) {
	// 		  $permissions[] = $permission->name;
	// 		}
	// 	  }
	// 	  return $permissions;
	//   }
	//   public function getAllRolesAttribute() {
	// 	$roles = [];
	// 	  foreach (Permission::all() as $roles) {
	// 		if (Auth::user()->role($roles->name)) {
	// 		  $roles[] = $roles->name;
	// 		}
	// 	  }
	// 	  return $roles;
	//   }
	  
	  
    public function create(Request $request){
    	$this->validate($request, [
    		'name' => 'required',
    		'email' => 'required|email|unique:crm_users',
    		'role_names' => 'required',
			'password' => 'required|string|min:6'
    	]);
    	$user = crmUser::create([
    		'name' => $request->name,
    		'email' => $request->email,
    		'password' => bcrypt($request->password),
			'role_id' => $request->role_names['roleid'],
			'role_name' => $request->role_names['rolename'],
    	]);
		
		$rolesuser = crmRolesusers::create([
			'model_id' => $user->id,
			
			'role_id' => $request->role_names['roleid'],
			'model_type' => "App\Models\crmUser",
    	]);
    	
    	return $user;
		return $rolesuser;
    }

    public function show(Request $request, $id){
    	return crmUser::find($id);
    }

    public function update(Request $request, $id){
    	$this->validate($request, [
    		'name' => 'required',
    	]);
    	crmUser::where('id', $id)->update([
    		'name' => $request->name,
    		'email' => $request->email,
			'password' => bcrypt($request->password),
			'role_id' => $request->role_names['roleid'],
			'role_name' => $request->role_names['rolename'],
    	]);
		crmRolesusers::where('model_id', $id)->update([
			
			'model_id' => $request->id,

			'role_id' => $request->role_names['roleid'],
			'model_type' => "App\Models\crmUser",

			
    	]);
    	//  $user = crmUser::find($id);
		//  $userRoles = crmRolesusers::find($id);
    	//  $userRoles = $user->getRoleNames();
    	//  dd($userRoles);
    	//  foreach($userRoles as $userRole){
    	//  	$role = crmRole::where('name', $userRole)->first();
    	//  	$user->removeRole($role);
    	//  }
    	//  $role = crmRole::where('name', $request->role_names)->first();
    	//  $user->assignRole($role);
		return crmUser::find($id);
    }

    public function delete($id){
    	crmRolesusers::where('model_id', $id)->delete();
		return crmUser::where('id', $id)->delete();
    }
}
