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
            'name' => 'required',
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
        $events = Event::all();
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
        $response = [
            'event' => $event
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
}