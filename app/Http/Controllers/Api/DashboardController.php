<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\crmPermission;
use App\Models\crmRole;

use Illuminate\Http\Request;

use App\Models\crmUser;
use Spatie\Permission\Models\Role;

class DashboardController extends Controller
{
    public function index(Request $request){
        
        crmRole::create(['name'=>'tetst']);
        crmPermission::create(['name'=>'teststs']);

    	return crmUser::orderBy('name', 'asc')->get();
        
    }

    public function create(Request $request){
    	
    }

    public function show(Request $request, $id){
    	return crmUser::find($id);
    }

    public function update(Request $request, $id){
    	
    }

    public function delete(Request $request, $id){
    	
    }
    
    
    // public function index()
    // {
    // $coins = \DB::table('coins')
    //                 ->where('name','=','Bitcoin')
    //                 ->orderBy('year', 'ASC')
    //                 ->get();
    //     return response()->json($coins);
    // }
}
