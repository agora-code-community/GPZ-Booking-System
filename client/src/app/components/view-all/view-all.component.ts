import { Component, OnInit } from '@angular/core';
import { EventServiceService } from '../../services/event-service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit {

  events: any; // to hold all the events from the db
  showSpinner = true;  // shows the loader

  constructor(
      private eventServ: EventServiceService,
      private modalService: NgbModal
      ) { }

  ngOnInit() {
    this.getEvents(); // gets events
  }

  /**
   * Gets the stored events from the db
   */
  getEvents() {
    this.eventServ.getAllEvents().subscribe(data => {
      this.events = data['events'];
      this.showSpinner = false; // dont show spinner on success

      console.log(this.events);
    });
  }

  // not yet implemented in API
  deleteEvnt(id) {
    this.eventServ.deleteEvent(id).subscribe(data => {
      if (data) { console.log(data); } // prints to the console
        // TODO: update view on delete
    });
  }

}
