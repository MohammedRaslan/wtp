<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Relations extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::table('projects', function (Blueprint $table) {       
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('admin_id')->references('id')->on('admins');
            $table->foreign('category_id')->references('id')->on('categories');
            $table->foreign('subcategory_id')->references('id')->on('subcategories');
            $table->foreign('project_offer_id')->references('id')->on('project_offers');
        });

        Schema::table('membership_offers', function (Blueprint $table) {       
            $table->foreign('admin_id')->references('id')->on('admins');
        });

        Schema::table('memberships', function (Blueprint $table) {       
            $table->foreign('membership_offer_id')->references('id')->on('membership_offers');
        });

        Schema::table('categories', function (Blueprint $table) {       
            $table->foreign('admin_id')->references('id')->on('admins');
        });

        Schema::table('requests', function (Blueprint $table) {       
            $table->foreign('project_id')->references('id')->on('projects');
        });

        Schema::table('subcategories', function (Blueprint $table) {       
            $table->foreign('admin_id')->references('id')->on('admins');
            $table->foreign('category_id')->references('id')->on('categories');

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
