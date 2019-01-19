import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthServiceService } from './auth-service.service';

@Injectable()
export class BookingServiceService {

  // variables
  baseURL = 'https://agora-booking-system.herokuapp.com/api/bookings/';
  // baseURL = 'http://127.0.0.1:8000/api/bookings/';
  contentHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(
    private http: HttpClient,
    private authService: AuthServiceService
  ) {}

  // gets the rooms from the db
  // TODO: Cache rooms so we dont have to query the server all the time
  getRooms() {
    // return this.http.get('http://127.0.0.1:8000/api/rooms/all'); // for local
    return this.http.get('https://agora-booking-system.herokuapp.com/api/rooms/all'); // for production
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
