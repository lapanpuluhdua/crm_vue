<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\crmProduct;
use App\Models\crmRole;
use App\Models\crmPermission;

use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class ProductController extends Controller
{
    public function index(Request $request){
        // crmRole::create(['name'=>'tetst']);
        // crmPermission::create(['name'=>'teststs']);

        //  $role = Role::findById(15);
		//  $permission = Permission::findById(9);
		//  $role->givePermissionTo($permission);
        
    	return crmProduct::orderBy('id', 'asc')->get();
    }
}