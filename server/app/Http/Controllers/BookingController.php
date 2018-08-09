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
            'rooms' => 'required|exists:rooms,id'
        ]);

        if($validator->fails()){
            return response()->json(['error'=>$validator->errors()], 401);
        }

        $input = $request->all();

        $booking = new Booking($input);
        $booking->save();
        $booking->rooms()->attach($request->rooms);

        $response = [
            'booking' => $booking
        ];

        return response()->json($response, 201);
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
