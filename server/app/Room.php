<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Room extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name'
    ];

    /**
     * Get the bookings in the room
     */
    public function bookings(){
        return $this->belongsToMany('App\Booking');
    }
}
