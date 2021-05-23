<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class FollowingSchema extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('followers', function ($table)
        {
            $table->integer('user_id')->unsigned();
            $table->integer('follow_id')->unsigned();
            $table->timestamps();
        });
        Schema::create('usersWork', function (Blueprint $table)
        {
            $table->increments('id');
            $table->integer('actualId');
            $table->string('username', 255)->unique;
            $table->string('img', 255);
            $table->string('membership_type', 25);
            $table->float('storage');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
