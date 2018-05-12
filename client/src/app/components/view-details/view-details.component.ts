import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { EventServiceService } from '../../services/event-service.service';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {

  // variables
  id: number; // the event's ID #
  evnt: any; // holds the event specific info
  bookings: any; // holds the booking info for a specific event

  constructor(
    private eventServ: EventServiceService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id']; // retrievs id from  the url
    // fetches data from db
    this.getEvent(this.id);
  }

   /**
   * Fetches a single event from the db
   * @param id of the selected event
   */
  getEvent(id) {
    this.eventServ.getAnEvent(id).subscribe(data => {
      this.evnt = data['event'];
      this.bookings = data['bookings'];
      // console.log(this.evnt);
    });
  }

}
