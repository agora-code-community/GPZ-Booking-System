<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'organization_id',
        'description'
    ];

    /**
     * Get the bookings of the event
     */
    public function bookings(){
        return $this->hasMany('App\Booking');
    }

    /**
     * Assign the event to an organization.
     */
    public function organization(){
        return $this->belongsTo('App\Organization');
    }
}
