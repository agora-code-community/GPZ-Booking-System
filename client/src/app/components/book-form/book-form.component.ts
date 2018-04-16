import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbTabset } from '@ng-bootstrap/ng-bootstrap';
import { BookingServiceService } from './../../services/booking-service.service';
import { EventServiceService } from './../../services/event-service.service';

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
    private evntService: EventServiceService
  ) { }

  ngOnInit() {
    this.initRooms();
  }

  // initialises the rooms
  initRooms() {
    this.bservice.getRooms().subscribe( data => {
      this.rooms = data['rooms'];
    });
  }

  // Event form submitted
  onEvntSubmit(evnt) {
    // console.log(evnt);
    this.evntService.storeEvent(evnt).subscribe(data => {
      this.event = data['event'];
    });

    this.t.select('details'); // selects the details tab after the posting
  }

  // booking details form submitted
  onBookingSubmit(data) {
    // format dates for object to string
    data.start_date = this.formatDate(data.start_date);
    data.end_date = this.formatDate(data.end_date);

    // formatted times
      data.start_time = this.formatTime(data.start_time);
      data.end_time = this.formatTime(data.end_time);

      // sends to the api
      this.bservice.storeBooking(data).subscribe(booking => {
        if(booking) console.log("Added successfully");
        else console.log('Error occurred');
      });

    console.log(data);
  }

  formatDate(date):string {
    let year = date.year;
    let month = date.month;
    let day = date.day;

    return  this.formattedDate = year + '-' + month + '-' + day; // date yyyy-mm-dd
  }

  formatTime(time):string {
    return this.formattedTime = time.hour + ':' + time.minute + ':' + time.second;
  }

}
