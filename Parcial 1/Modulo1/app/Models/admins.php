<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class admins extends Model
{
    protected $fillable = [
        'username',
        'email',
        'election_type_id'
    ];

    public function electionType(): BelongsTo
    {
        return $this->belongsTo(ElectionType::class);
    }
}
