import { Component, OnInit } from '@angular/core';
import { EventServiceService } from '../../services/event-service.service';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FlashMessagesService } from 'ngx-flash-messages';

@Component({
  selector: 'app-edit-booking',
  templateUrl: './edit-booking.component.html',
  styleUrls: ['./edit-booking.component.css']
})
export class EditBookingComponent implements OnInit {

  // variables
  evnt: any; // to hold the retrieved end
  bookings: any; // to hold the events booking
  id: string; // the event's ID

  constructor(
      private evntService: EventServiceService,
      private route: ActivatedRoute,
      private router: Router,
      private flashMessagesService: FlashMessagesService
      ) { }

  ngOnInit() {
    // get id parameter from URL
      this.id = this.route.snapshot.params['id'];

      // call getEvent()
      this.getEvent(this.id);
  }

    /**
     * Gets specific event from db
     * @param id the event ID to be retrieved
     */
  getEvent(id) {
    this.evntService.getAnEvent(id).subscribe(data => {
      this.evnt = data['event'];
    });
  }

  /**
   * Sends updates to the database. Basically updates an event.
   * @param info changes from the form
   */
  onSubmit(info) {
    // send to API
    this.evntService.updateEvent(this.id, info).subscribe(data => {
      if (data) {
        this.flashMessagesService.show('The Event was successfully update. View below', {
          classes: ['alert', 'alert-success'],
          timeout: 3000
        });

        this.router.navigateByUrl('/view-booking');
      } else {
        // error message
        this.flashMessagesService.show('Oops! Something went wrong, could not update Event. Try again later.', {
          classes: ['alert', 'alert-warning'],
          timeout: 3000
        });
      }
    });
  }

}
