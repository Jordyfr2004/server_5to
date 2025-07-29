<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;


class election_types extends Model
{
    protected $fillable = ['name'];

    public function elections(): HasMany
    {
        return $this->hasMany(Election::class);
    }

    public function admins(): HasMany
    {
        return $this->hasMany(Admin::class);
    }
}
