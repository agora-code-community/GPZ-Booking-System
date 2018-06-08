import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { EventServiceService } from '../../services/event-service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  bookingForm: FormGroup;  // holds data from the reactive form

  constructor(
    private eventServ: EventServiceService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private modalService: NgbModal
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

}
