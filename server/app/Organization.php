<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Organization extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'phone_number',
        'description'
    ];

    /**
     * Get the events of the organization
     */
    public function events(){
        return $this->hasMany('App\Event');
    }
}
