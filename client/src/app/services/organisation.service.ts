import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class OrganisationService {

  // baseURL = 'https://agora-booking-system.herokuapp.com/api/organization/';
  baseURL = 'http://127.0.0.1:8000/api/organizations/';
  contentHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Get all the organizations
   */
  getAllOrganizations() {
    return this.http.get(this.baseURL + 'all');
  }

  /**
   * Get particalur organization;s data
   */
  getAnOrg(id) {
    return this.http.get(this.baseURL + id);
  }

  /**
   * Saves an organization into the db
   * @param data the event input data
   */
  storeOrg(data) {
    return this.http.post(this.baseURL, data, {headers: this.contentHeaders});
  }

  /**
   * Updates an organization
   * @param org_id orginzation id to be updated
   * @param data the updated input data
   */
  updateEvent(org_id, data) {
    return this.http.put(this.baseURL + org_id, data, {headers: this.contentHeaders});
  }

  /**
   * Deletes an organization
   * @param org_id the organization's id
   */
  deleteEvent(org_id) {
    return this.http.delete(this.baseURL + org_id);
  }

}
