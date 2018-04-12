import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbTabset } from '@ng-bootstrap/ng-bootstrap';
import { BookingServiceService } from './../../services/booking-service.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  @ViewChild('t') t;  // selects the component eith the variale #t
  rooms: any;  // store the rooms from the db
  event_id: string; // the id of the event thats just been created
  step1 = true;  // if the event form has been submitted

  constructor(private bservice: BookingServiceService) { }

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
  onEvntSubmit(data) {
    console.log(data);
    this.step1 = false;
    this.t.select('details'); // selects the details tab after the posting
  }

  // booking details form submitted
  onBookingSubmit(data) {
    console.log(data);
  }

}
