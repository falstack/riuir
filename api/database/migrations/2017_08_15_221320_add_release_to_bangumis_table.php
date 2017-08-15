<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddReleaseToBangumisTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('bangumis', function (Blueprint $table) {
            $table->tinyInteger('release')->default(0);
            $table->timestamp('published_at')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('bangumis', function (Blueprint $table) {
            $table->dropColumn('release');
            $table->dropColumn('published_at');
        });
    }
}
