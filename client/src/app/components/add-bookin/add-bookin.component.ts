import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'ngx-flash-messages';
import { EventServiceService } from '../../services/event-service.service';
import { BookingServiceService } from '../../services/booking-service.service';

import { rooms } from '../../data-model';

@Component({
  selector: 'app-add-bookin',
  templateUrl: './add-bookin.component.html',
  styleUrls: ['./add-bookin.component.css']
})
export class AddBookinComponent implements OnInit {

  // variables
  id: string;
  formattedDate: string;  // change input date to one suited for db entry
  formattedTime: string;  // change input time to one suited for db entry

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private flashMessages: FlashMessagesService,
    private bookinService: BookingServiceService
  ) { }

  ngOnInit() {
    // Get event id from url
    this.id = this.route.snapshot.params['evnt_id'];
  }

   /**
   * Handles booking details form submission
   * @param data is from the input form
   * */
  onSubmit(data) {
    // add event ID from url as foriegn key for db record
    data.event_id = this.id;

    // format dates for object to string
    data.start_date = this.formatDate(data.start_date);
    data.end_date = this.formatDate(data.end_date);

    // formatted times
    data.start_time = this.formatTime(data.start_time);
    data.end_time = this.formatTime(data.end_time);

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

  /**
   * Changes the date format from object form -
   * e.g {year: xxxx, month: xx, day: xx} to recommended -> yyyy/mm/dd
   * @param date the date from the input form
   */
  formatDate(date): string {
    const year = date.year;
    const month = date.month;
    const day = date.day;

    return  this.formattedDate = year + '-' + month + '-' + day; // date yyyy-mm-dd
  }

  /**
   * Format the time from the input form, from object-based {hours: xx, minutes: xx, seconds: xx}
   * to recommended hours:minutes:seconds (h:m:s)
   * @param time to be formatted as recommended
   */
  formatTime(time): string {
    return this.formattedTime = time.hour + ':' + time.minute + ':' + time.second;
  }

}
