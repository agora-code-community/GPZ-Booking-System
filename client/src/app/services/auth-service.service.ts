import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthServiceService {

  // server request variables
  baseUrl = 'https://agora-booking-system.herokuapp.com/users';
  contentHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'  // <- enables us to get validation messages from the API
  });

  authToken: any;
  username: string;


  constructor( private http: HttpClient) { }

  /**
   * Creates a new user of the system
   * @param user new user details
   */
  register(user) {
    return this.http.post(this.baseUrl + '/register', user, { headers: this.contentHeaders});
  }

    /**
   * Logs the user in
   * @param creds log in credentials
   */
  login(creds) {
    return this.http.post(this.baseUrl + '/login', creds, { headers: this.contentHeaders });
  }

   /**
   * Stores user data in local storage
   * @param token is the access token from the server
   * @param username is the username of the logged in person or robot. -\('~')/-
   */
  storeUserData(token, username) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('username', username);

    this.authToken = token;
    this.username = username;
  }

  /**
   * Loads the token from localstorage
   */
  loadToken() {
    const token = localStorage.getItem('id_token');  // gets token from local storage
    this.authToken = token;
  }

   /**
   * Checks if the user is logged in
   */
  loggedIn() {
    return tokenNotExpired('id_token');
  }

  /**
   * Logs the user out of the app
   */
  logout() {
    this.authToken = null;
    this.username = null;

    localStorage.clear();
  }

}
