<?php

namespace App\Http\Controllers;

use App\Organization;
use Validator;
use Illuminate\Http\Request;

class OrganizationController extends Controller
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

        $organization = new Organization($input);
        $organization->save();

        $response = [
            'organization' => $organization
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

        // query to retreive organization and its events
        $organization = Organization::with(['events' => function($query) {
            $query->latest(); // orders the events in desc order(most rest first)
        }])->orderBy('created_at', 'desc')->get();

        $response = [
            'organization' => $organization
        ];
        return response()->json($response, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param Organization $organization
     * @return \Illuminate\Http\Response
     * @internal param int $id
     */
    public function select(Organization $organization)
    {
        $events = $organization->events()->get();
        $response = [
            'organization' => $organization,
            'events' => $events
        ];

        return response($response, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param Organization $organization
     * @return \Illuminate\Http\Response
     * @internal param int $id
     */
    public function update(Request $request, Organization $organization)
    {
        if(!$organization)
            throw new NotFoundHttpException;

        $organization->update($request->all());
        $response = [
            'event' => $organization
        ];

        return response()->json($response, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Organization $organization
     * @return \Illuminate\Http\Response
     * @throws \Exception
     * @internal param int $id
     */
    public function destroy(Organization $organization)
    {
        if(!$organization)
            throw new NotFoundHttpException;

        if($organization->delete())
            return response()->json(null, 204);
        else
            return response()->json(['error' => 'Could not delete organization'], 500);
    }
}
