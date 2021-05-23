<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProjectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('title');
            $table->string('breif');
            $table->string('description');
            $table->string('state');
            $table->string('img');
            $table->string('file');
            $table->integer('type');
            $table->float('price');

            $table->integer('offer_id');
            $table->integer('category_id');
            $table->integer('subcategory_id');
            $table->integer('user_id');
            $table->integer('admin_id');
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
        Schema::dropIfExists('projects');
    }
}
