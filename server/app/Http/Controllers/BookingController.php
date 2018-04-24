<?php

namespace App\Http\Controllers;

use App\Booking;
use Illuminate\Http\Request;
use Validator;

class BookingController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param array $rooms
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'start_time' => 'required',
            'end_time' => 'required',
            'start_date' => 'required | date',
            'end_date' => 'required | date',
            'event_id' => 'required|exists:events,id',
        ]);

        if($validator->fails()){
            return response()->json(['error'=>$validator->errors()], 401);
        }

        $input = $request->all();

        $booking = new Booking($input);
        $booking->save();
        //$booking->rooms()->attach($rooms);

        $response = [
            'booking' => $booking
        ];

        return response()->json($response, 201);
    }
}
