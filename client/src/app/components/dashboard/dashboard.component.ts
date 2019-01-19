import { Component, OnInit } from '@angular/core';
import { BookingServiceService } from '../../services/booking-service.service';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private bookinService: BookingServiceService,
    private utilService: UtilsService
  ) { }

  ngOnInit() {
    // caches rooms from db
    this.bookinService.getRooms().subscribe(
      data => {
        this.utilService.cacheRooms(data['rooms']);
      },
      err => { console.log(err); }
    );
  }

}
