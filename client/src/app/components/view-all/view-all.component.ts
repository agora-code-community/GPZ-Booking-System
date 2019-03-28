import { Component, OnInit } from '@angular/core';
import { EventServiceService } from '../../services/event-service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FlashMessagesService } from 'ngx-flash-messages';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit {

  events: Array<any>; // to hold all the events from the db
  showSpinner = true;  // shows the loader
  nothing = false;  // used to check if events are present

  constructor(
      private eventServ: EventServiceService,
      private modalService: NgbModal,
      private flashmessages: FlashMessagesService
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

      // console.log(this.events);
    });
  }

  /**
   * Opens and displays the delete modal
   * @param content this is the template reference variable of the delete modal
   */
  open(content) {
    this.modalService.open(content).result.then((result) => {
      // console.log(result);
      // call delete method here
      this.deleteEvnt(result);
    });
  }

  /**
   * Deletes an event from the system
   * TODO: casade bookings before deleting the event
   * @param id of the event to be deleted
   */
  deleteEvnt(id) {
    this.eventServ.deleteEvent(id).subscribe(data => {
      if (data === null) {
        // show success alert message
        this.flashmessages.show('The Event was successfully deleted', {
          classes: ['alert', 'alert-success'],
          timeout: 3000
        });
        // updates view
        this.getEvents();

      } else {
        // error message
        this.flashmessages.show('Oops! Something went wrong, could not delete booking. Try again later.', {
          classes: ['alert', 'alert-warning'],
          timeout: 3000
        });
      }
    });
  }

}
