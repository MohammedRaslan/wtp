<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProjectOffersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('project_offers', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('title');
            $table->string('body');
            $table->float('price');
           // $table->timestamps('interval');
            $table->integer('membership_offer_id');
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
        Schema::dropIfExists('project_offers');
    }
}
