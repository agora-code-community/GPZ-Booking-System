import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'ngx-flash-messages';
import { EventServiceService } from '../../services/event-service.service';
import { BookingServiceService } from '../../services/booking-service.service';

import { rooms } from '../../data-model';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-add-bookin',
  templateUrl: './add-bookin.component.html',
  styleUrls: ['./add-bookin.component.css']
})
export class AddBookinComponent implements OnInit {

  // variables
  id: string;
  rooms: any;
  formattedDate: string;  // change input date to one suited for db entry
  formattedTime: string;  // change input time to one suited for db entry

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private flashMessages: FlashMessagesService,
    private utilService: UtilsService,
    private bookinService: BookingServiceService
  ) { }

  ngOnInit() {
    // Get event id from url
    this.id = this.route.snapshot.params['evnt_id'];

    this.getRooms();
  }

  /**
   * Gets rooms from local storage
   */
  getRooms() {
    this.rooms = this.utilService.loadRooms();
  }

   /**
   * Handles booking details form submission
   * @param data is from the input form
   * */
  onSubmit(data) {
    // add event ID from url as foriegn key for db record
    data.event_id = this.id;

    // format dates for object to string
    data.start_date = this.utilService.formatDate(data.start_date);
    data.end_date = this.utilService.formatDate(data.end_date);

    // formatted times
    data.start_time = this.utilService.formatTime(data.start_time);
    data.end_time = this.utilService.formatTime(data.end_time);

      // sends to the api
    this.bookinService.storeBooking(data).subscribe(booking => {
      // on success
      if (booking) {
          // show success alert message
          this.flashMessages.show('Booking has been successfully created', {
            classes: ['alert', 'alert-success'],
            timeout: 3000
          });

          this.router.navigateByUrl('/view-details/' + this.id); // redirect to event detials page
      } else {
        // throw error message
        this.flashMessages.show('Oops! Something went wrong, could not create a booking. Try again later.', {
          classes: ['alert', 'alert-warning'],
          timeout: 3000
        });
      }
    });

    // console.log(data); // <- for debug purposes
  }

}
