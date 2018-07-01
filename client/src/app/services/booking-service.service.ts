import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class BookingServiceService {

  // variables
  baseURL = 'https://agora-booking-system.herokuapp.com/api/bookings/';

  contentHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  // gets the rooms from the db
  getRooms() {
    return this.http.get('https://agora-booking-system.herokuapp.com/api/rooms/all');
  }

  /**
   * Stores a booking
   * @param data the booking input data
   */
  storeBooking(data) {
    return this.http.post(this.baseURL, data, {headers: this.contentHeaders});
  }

  /**
   * Updates an event
   * @param booking_id booking id to be updated
   * @param data the updated input data
   */
  updateBooking(booking_id, data) {
    return this.http.put(this.baseURL + booking_id, data, {headers: this.contentHeaders});
  }

  /**
   * Deletes an event
   * @param booking_id the event's id
   */
  deleteBooking(booking_id) {
    return this.http.delete(this.baseURL + booking_id);
  }

}
