<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ChangeJsonColumnToText extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('bangumis', function ($table) {
            $table->text('alias')->change();
            $table->text('season')->change();
        });

        Schema::table('videos', function ($table) {
            $table->text('resource')->change();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('bangumis', function ($table) {
            $table->json('alias')->change();
            $table->json('season')->change();
        });

        Schema::table('videos', function ($table) {
            $table->json('resource')->change();
        });
    }
}
