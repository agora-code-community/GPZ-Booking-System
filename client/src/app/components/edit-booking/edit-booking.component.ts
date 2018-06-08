import { Component, OnInit } from '@angular/core';
import { EventServiceService } from '../../services/event-service.service';
import { Router, Params ,ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  evntForm: FormGroup;

  constructor(
      private evntService: EventServiceService,
      private route: ActivatedRoute,
      private router: Router,
      private fb: FormBuilder
      ) { }

  ngOnInit() {
    // get id parameter from URL
      this.id = this.route.snapshot.params['id'];

      // call getEvent()
      this.getEvent(this.id);

      this.evntForm = this.fb.group({
        name: this.evnt.name
      });
  }

    /**
     * Gets specific event from db
     * @param id the event ID to be retrieved
     */
  getEvent(id) {
    this.evntService.getAnEvent(id).subscribe(data => {
      this.evnt = data['event'];
      this.bookings = data['bookings'];
    });
  }

  onSubmit() {
    // send to API

      // this.evntService.updateEvent(this.id, data).subscribe(data => {
      //   if (data) {
      //       console.log('UPDATED SUCCESSFULLY'); // TODO: change to alert message
      //     this.router.navigateByUrl('/view-booking');
      //   } else {
      //     console.log('ERROR');
      //   }
      // });
  }

}
