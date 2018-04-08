import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbTabset } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  @ViewChild('t') t;  // selects the component eith the variale #t

  constructor() { }

  ngOnInit() {
  }

  // Event form submitted
  onEvntSubmit(data) {
    console.log(data);
    this.t.select('details'); // selects the details tab after the posting
  }

  // booking details form submitted
  onBookingSubmit(data) {
    console.log(data);
  }

}
