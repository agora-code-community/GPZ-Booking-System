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

}
