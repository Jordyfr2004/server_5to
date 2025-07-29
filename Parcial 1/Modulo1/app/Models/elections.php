<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class elections extends Model
{
    protected $fillable = [
        'name', 
        'start_date', 
        'end_date', 
        'election_type_id'
    ];

    protected $dates = ['start_date', 'end_date'];

    public function electionType(): BelongsTo
    {
        return $this->belongsTo(ElectionType::class);
    }

    public function candidates(): HasMany
    {
        return $this->hasMany(Candidate::class);
    }


    public function votes(): HasMany
    {
        return $this->hasMany(Vote::class);
    }
}
