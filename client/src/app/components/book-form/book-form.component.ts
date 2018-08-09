import { Component, OnInit, ViewChild } from '@angular/core';
import { BookingServiceService } from './../../services/booking-service.service';
import { EventServiceService } from './../../services/event-service.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'ngx-flash-messages';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  @ViewChild('t') t;  // selects the component eith the variale #t
  rooms: any;  // store the rooms from the db
  event: any; // full object of created event
  formattedDate: string;
  formattedTime: string;

  constructor(
    private bservice: BookingServiceService,
    private evntService: EventServiceService,
    private flashMessagesService: FlashMessagesService,
    private utilService: UtilsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.initRooms();
  }

  /**
   * loads rooms t=from local storage
   */
  initRooms() {
    this.rooms = this.utilService.loadRooms();
  }

  /**
   * Stores the event data first and moves to next tab
   * @param evnt the event data from the form
   */
  onEvntSubmit(evnt) {
    // console.log(evnt);
    this.evntService.storeEvent(evnt).subscribe(data => {
      this.event = data['event'];

      // success message
      if (data) {
        this.flashMessagesService.show('Event created succussfully.', {
          classes: ['alert', 'alert-success'],
          timeout: 2500
        });
      }
    });

    this.t.select('details'); // selects the details tab after the posting
  }

  /**
   * Handles booking details form submission
   * @param data is from the input form
   * */
  onBookingSubmit(data) {
    // format dates for object to string
    data.start_date = this.utilService.formatDate(data.start_date);
    data.end_date = this.utilService.formatDate(data.end_date);

    // formatted times
    data.start_time = this.utilService.formatTime(data.start_time);
    data.end_time = this.utilService.formatTime(data.end_time);

    // sends to the api
    this.bservice.storeBooking(data).subscribe(booking => {
      // on success
      if (booking) {
          // show success alert message
          this.flashMessagesService.show('Booking has been successfully created', {
            classes: ['alert', 'alert-success'],
            timeout: 3000
          });

          this.router.navigateByUrl('/view-booking'); // redirect to view-all page
      } else { console.log('Error occurred'); }
    });

    // console.log(data); // <- for debug purposes
  }

}
