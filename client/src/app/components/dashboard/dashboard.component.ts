import { Component, OnInit } from '@angular/core';

import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';

import { CalendarEvent } from 'angular-calendar';

import { BookingServiceService } from '../../services/booking-service.service';
import { UtilsService } from '../../services/utils.service';
import { EventServiceService } from '../../services/event-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  viewDate = Date.now();
  activeDayIsOpen = true;
  
  events: CalendarEvent[] = [
    {
      start: subDays(startOfDay(new Date()), 1),
      end: addDays(new Date(), 1),
      title: 'A 3 day event'
    },
    {
      start: startOfDay(new Date()),
      title: 'An event with no end date',
    },
    {
      start: subDays(endOfMonth(new Date()), 3),
      end: addDays(endOfMonth(new Date()), 3),
      title: 'A long event that spans 2 months'
    },
    {
      start: addHours(startOfDay(new Date()), 2),
      end: new Date(),
      title: 'A draggable and resizable event'
    }
  ];

  constructor(
    private bookinService: BookingServiceService,
    private utilService: UtilsService,
    private evntService: EventServiceService
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
