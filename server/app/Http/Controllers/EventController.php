<?php

namespace App\Http\Controllers;

use App\Event;
use Illuminate\Http\Request;
use Validator;

class EventController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required | string',
            'organization_id' => 'required | exists:organizations,id',
            'description' => 'required | string'
        ]);

        if($validator->fails()){
            return response()->json(['error'=>$validator->errors()], 401);
        }

        $input = $request->all();

        $event = new Event($input);
        $event->save();

        $response = [
            'event' => $event
        ];

        return response()->json($response, 201);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // $events = Event::all();
        
        // query to retreive event and its bookings
        $events = Event::with(['bookings' => function($query) {
            $query->latest(); // orders the bookings in desc order(most rest first)
        }])->orderBy('created_at', 'desc')->get();

        $response = [
            'events' => $events
        ];
        return response()->json($response, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param Event $event
     * @return \Illuminate\Http\Response
     * @internal param int $id
     */
    public function select(Event $event)
    {
    	$bookings = $event->bookings()->get();
        $response = [
            'event' => $event,
            'bookings' => $bookings->load('rooms:name') // gets a booking and its rooms
        ];

        return response($response, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param Event $event
     * @return \Illuminate\Http\Response
     * @internal param int $id
     */
    public function update(Request $request, Event $event)
    {
        if(!$event)
            throw new NotFoundHttpException;

        $event->update($request->all());
        $response = [
            'event' => $event
        ];

        return response()->json($response, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Event $event
     * @return \Illuminate\Http\Response
     * @throws \Exception
     * @internal param int $id
     */
    public function destroy(Event $event)
    {
        if(!$event)
            throw new NotFoundHttpException;

        if($event->delete())
            return response()->json(null, 204);
        else
            return response()->json(['error' => 'Could not delete event'], 500);
    }
}
