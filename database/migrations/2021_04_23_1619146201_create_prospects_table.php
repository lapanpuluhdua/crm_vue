<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProspectsTable extends Migration
{
    public function up()
    {
        Schema::create('prospects', function (Blueprint $table) {

        $table->id();
		$table->char('name',50);
		$table->char('designation',50)->nullable();
		$table->char('email',100)->nullable();
		$table->char('contactno',20)->nullable();
		$table->char('schoolname',100)->nullable();
		$table->char('website',100)->nullable();
		$table->date('enquirydate')->nullable();
		$table->char('enquirydetails',200)->nullable();
        $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('prospects');
    }
}