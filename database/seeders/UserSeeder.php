<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
		DB::table('crm_users')->insert([
			'id'=>999,
			'name'=>'Ultra Admin',
			'email'=>'admin@developer.com',
			'password'=>bcrypt('1234qwer'),
			'created_at'=>date('Y-m-d H:i:s'),
			'updated_at'=>date('Y-m-d H:i:s')
		]);
    }
}
