<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class votes extends Model
{
    protected $fillable = [
        'voter_id',
        'candidate_id',
        'election_id',
        'voted_at'
    ];

    protected $dates = ['voted_at'];

    public function voter(): BelongsTo
    {
        return $this->belongsTo(Voter::class);
    }

    public function candidate(): BelongsTo
    {
        return $this->belongsTo(Candidate::class);
    }

    public function election(): BelongsTo
    {
        return $this->belongsTo(Election::class);
    }


}
