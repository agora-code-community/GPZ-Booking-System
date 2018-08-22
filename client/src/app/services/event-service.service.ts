import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthServiceService } from './auth-service.service';

@Injectable()
export class EventServiceService {

  // baseURL = 'https://agora-booking-system.herokuapp.com/api/events/';
  baseURL = 'http://127.0.0.1:8000/api/events/';
  contentHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Get all the events
   */
  getAllEvents() {
    return this.http.get(this.baseURL + 'all');
  }

  /**
   * Get particalur event
   */
  getAnEvent(id) {
    return this.http.get(this.baseURL + id);
  }

  /**
   * Saves an event into the db
   * @param data the event input data
   */
  storeEvent(data) {
    return this.http.post(this.baseURL, data, {headers: this.contentHeaders});
  }

  /**
   * Updates an event
   * @param event_id event id to be updated
   * @param data the updated input data
   */
  updateEvent(event_id, data) {
    return this.http.put(this.baseURL + event_id, data, {headers: this.contentHeaders});
  }

  /**
   * Deletes an event
   * @param event_id the event's id
   */
  deleteEvent(event_id) {
    return this.http.delete(this.baseURL + event_id);
  }

}
