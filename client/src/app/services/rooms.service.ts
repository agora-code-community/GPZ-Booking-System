import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class RoomsService {

  baseURL = 'https://agora-booking-system.herokuapp.com/api/rooms/';
  // baseURL = 'http://127.0.0.1:8000/api/rooms/';
  contentHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(
    private http: HttpClient
  ) { }

    /**
   * Get all the rooms
   */
  getAllRooms() {
    return this.http.get(this.baseURL + 'all');
  }

  /**
   * Get particalur room
   */
  getRoom(id) {
    return this.http.get(this.baseURL + id);
  }

  /**
   * Saves an room into the db
   * @param data the room input data
   */
  storeRoom(data) {
    return this.http.post(this.baseURL, data, {headers: this.contentHeaders});
  }

  /**
   * Updates a rooom
   * @param room_id room id to be updated
   * @param data the updated input data
   */
  updateRoom(room_id, data) {
    return this.http.put(this.baseURL + room_id, data, {headers: this.contentHeaders});
  }

  /**
   * Deletes a room
   * @param room_id the event's id
   */
  deleteRoom(room_id) {
    return this.http.delete(this.baseURL + room_id);
  }


}
