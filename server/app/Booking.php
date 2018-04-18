<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'start_time',
        'end_time',
        'start_date',
        'end_date',
        'event_id'
    ];

    /**
     * Assign the booking to an event.
     */
    public function event(){
        return $this->belongsTo('App\Event');
    }

    /**
     * Assign the rooms owned by the booking.
     */
    public function rooms(){
        return $this->belongsToMany('App\Room');
    }
}
