import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthServiceService {

  // server request variables
  baseUrl = 'https://agora-booking-system.herokuapp.com/users';
  contentHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor( private http: HttpClient) { }

    /**
   * Logs the user in
   * @param user log in credentials
   */
  authenticateUser(user) {
    return this.http.post(this.baseUrl + '/authenticate', user, { headers: this.contentHeaders });
  }

}
