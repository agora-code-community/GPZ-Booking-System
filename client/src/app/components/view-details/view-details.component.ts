import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { EventServiceService } from '../../services/event-service.service';
import { NgbModal, NgbDateStruct, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookingServiceService } from '../../services/booking-service.service';
import { FlashMessagesService } from 'ngx-flash-messages';
import { UtilsService } from '../../services/utils.service';

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

  // form variables
  startDate: NgbDateStruct; // <- custom type acceptable for use in datepicker comp
  endDate: NgbDateStruct;
  startTime: NgbTimeStruct; // <- custom type acceptable for use in timepicker comp
  endTime: NgbTimeStruct;

  constructor(
    private eventServ: EventServiceService,
    private bookinService: BookingServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal,
    private flashmessages: FlashMessagesService,
    private utilService: UtilsService
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

      this.showSpinner = false;
      // console.log(this.evnt);
    });
  }

   /**
   * Opens edit madal for a booking
   * @param content is the template reference variable of the edit modal
   * @param booking the details to be edited
   */
  openEdit(content, booking) {
    this.modalService.open(content, {size: 'lg'});

    this.startDate = this.utilService.reformatDate(booking.start_date);
    this.endDate = this.utilService.reformatDate(booking.end_date);
    this.startTime = this.utilService.reformatTime(booking.start_time);
    this.endTime = this.utilService.reformatTime(booking.end_time);

    // console.log(booking.start_date);
  }

  /**
   * Opens delete modal for the bookings
   * @param content the template reference variable of the delete modal
   */
  openDelete(content) {
    this.modalService.open(content);
  }

  /**
   * Updates the record of a booking in the db
   * @param id of the booking being updated
   * @param bkForm the form data
   */
  updateBk(bkForm) {
    // reformat dates and times to string. I know, its hectic
    // this is in preparation to send correct data to the db
    bkForm.start_date = this.utilService.formatDate(bkForm.start_date);
    bkForm.end_date = this.utilService.formatDate(bkForm.end_date);
    bkForm.start_time = this.utilService.formatTime(bkForm.start_time);
    bkForm.end_time = this.utilService.formatTime(bkForm.end_time);

    const id = bkForm.id;

    // send to db
    this.bookinService.updateBooking(id, bkForm).subscribe(data => {
      if (data) {
        this.flashmessages.show('The Booking has been successfully update!', {
          classes: ['alert', 'alert-success'],
          timeout: 3000
        });
      } else { // error message
        this.flashmessages.show('Oops! Something went wrong, could not delete booking. Try again later.', {
          classes: ['alert', 'alert-warning'],
          timeout: 3000
        });
      }
    });

    // console.log(bkForm); // for debug purposes
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
