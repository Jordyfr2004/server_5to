<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('votes', function (Blueprint $table) {
            $table->id();
            $table->foreignId('voter_id')->constrained('voters')->onDelete('cascade');
            $table->foreignId('candidate_id')->constrained('candidates')->onDelete('cascade');
            $table->foreignId('election_id')->constrained('elections')->onDelete('cascade');
            $table->timestamp('voted_at');
            $table->timestamps();

            $table->unique(['voter_id', 'election_id']); // Previene múltiples votos en la misma elección
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('votes');
    }
};
