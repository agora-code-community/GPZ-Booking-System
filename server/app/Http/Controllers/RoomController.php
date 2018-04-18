<?php

namespace App\Http\Controllers;

use App\Room;
use Illuminate\Http\Request;
use Validator;

class RoomController extends Controller
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

        $room = new Room($input);
        $room->save();

        $response = [
            'room' => $room
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
        $rooms = Room::all();
        $response = [
            'rooms' => $rooms
        ];
        return response()->json($response, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param Room $room
     * @return \Illuminate\Http\Response
     * @internal param int $id
     */
    public function select(Room $room)
    {
        $response = [
            'room' => $room
        ];

        return response($response, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param Room $room
     * @return \Illuminate\Http\Response
     * @internal param int $id
     */
    public function update(Request $request, Room $room)
    {
        if(!$room)
            throw new NotFoundHttpException;

        $room->update($request->all());
        $response = [
            'room' => $room
        ];

        return response()->json($response, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Room $room
     * @return \Illuminate\Http\Response
     * @throws \Exception
     * @internal param int $id
     */
    public function destroy(Room $room)
    {
        if(!$room)
            throw new NotFoundHttpException;

        if($room->delete())
            return response()->json(null, 204);
        else
            return response()->json(['error' => 'Could not delete room'], 500);
    }
}
