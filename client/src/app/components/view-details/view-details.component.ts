import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { EventServiceService } from '../../services/event-service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookingServiceService } from '../../services/booking-service.service';
import { FlashMessagesService } from 'ngx-flash-messages';

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
  showSpinner = true;

  bookingForm: FormGroup;  // holds data from the reactive form

  constructor(
    private eventServ: EventServiceService,
    private bookinService: BookingServiceService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private modalService: NgbModal,
    private flashmessages: FlashMessagesService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id']; // retrievs id from  the url
    // fetches data from db
    this.getEvent(this.id);

    this.bookingForm = this.fb.group({
      start_time: ['', Validators.required],
      end_time: ['', Validators.required],
      start_date: ['', Validators.required],
      end_date: ['', Validators.required],
    });
  }

   /**
   * Fetches a single event from the db
   * @param id of the selected event
   */
  getEvent(id) {
    this.eventServ.getAnEvent(id).subscribe(data => {
      this.evnt = data['event'];
      this.bookings = data['bookings'];

      this.showSpinner = false;
      // console.log(this.evnt);
    });
  }

  /**
   * Opens delete modal for the bookings
   */
  open(content) {
    this.modalService.open(content);
  }

  /**open booking edit modal
   * TODO: use reactive forms
   */
  openCentered(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  /**
   * Updates the record of a booking in the db
   * @param id of the booking being updated
   * @param bookingForm the form data
   */
  updateBookin(id, bookingForm) {
    console.log('Form data -> ' + bookingForm);
  }

  /**
   * Deletes a booking permanently
   * @param id of the booking to be deleted
   */
  deleteBookin(id) {
    this.bookinService.deleteBooking(id).subscribe(data => {
      if (data === null) {
         // show success alert message
         this.flashmessages.show('Booking was successfully deleted', {
          classes: ['alert', 'alert-success'],
          timeout: 3000
        });
      } else {
         // Error alert message
         this.flashmessages.show('Oops! Something went wrong, could not delete booking. Try again later.', {
          classes: ['alert', 'alert-warning'],
          timeout: 3000
        });
      }
    });
  }

}
