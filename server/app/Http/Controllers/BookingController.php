<?php

namespace App\Http\Controllers;

use App\Booking;
use Illuminate\Http\Request;
use Validator;
use Illuminate\Support\Facades\DB;

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
        $booking_conflicts = 0;

        $validator = Validator::make($request->all(), [
            'start_time' => 'required | before:end_time',
            'end_time' => 'required | after:start_time',
            'start_date' => 'required | date | before_or_equal:end_date',
            'end_date' => 'required | date | after_or_equal:start_date',
            'event_id' => 'required | exists:events,id',
            'rooms' => 'required | exists:rooms,id',
            'number_of_people' => 'required | string',
            'kitchen_requirements' => 'required | string',
            'paid' => 'required | boolean'
        ]);

        if($validator->fails()){
            return response()->json(['error'=>$validator->errors()], 401);
        }

        $input = $request->all();

        $existing_bookings = DB::table('bookings')
            ->join('booking_room', 'bookings.id', '=', 'booking_room.booking_id')
            ->select('booking_room.room_id', 'bookings.start_time', 'bookings.end_time',
                'bookings.start_date', 'bookings.end_date')
            ->get();

        foreach ($existing_bookings as $existing_booking){
            foreach ($request->rooms as $room){
                if ($existing_booking->room_id == $room
                && ($request->end_time >= $existing_booking->start_time
                        && $request->start_time <= $existing_booking->end_time)
                && ($request->start_date >= $existing_booking->end_date
                        && $request->end_date <= $existing_booking->start_date)){

                    $booking_conflicts += 1;
                }
            }
        }

        if ($booking_conflicts > 0){
            $response = [
                'This booking clashes with another booking',
            ];

            return response()->json($response, 500);
        }
        else {

            $booking = new Booking($input);
            $booking->save();
            $booking->rooms()->attach($request->rooms);

            $response = [
                'booking' => $booking,
            ];

            return response()->json($response, 201);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param Booking $booking
     * @return \Illuminate\Http\Response
     * @internal param int $id
     */
    public function update(Request $request, Booking $booking)
    {
        if(!$booking)
            throw new NotFoundHttpException;

        $booking->update($request->all());
        $response = [
            'booking' => $booking
        ];

        return response()->json($response, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Booking $booking
     * @return \Illuminate\Http\Response
     * @throws \Exception
     * @internal param int $id
     */
    public function destroy(Booking $booking)
    {
        if(!$booking)
            throw new NotFoundHttpException;

        if($booking->delete())
            return response()->json(null, 204);
        else
            return response()->json(['error' => 'Could not delete booking'], 500);
    }
}
