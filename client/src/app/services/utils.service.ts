import { Injectable } from '@angular/core';
import { NgbDateStruct, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';

/**
 * Houses general functions that are reusable in a number of components.
 */

@Injectable()
export class UtilsService {

  constructor() { }

  /**
   * Changes the date format from object form -
   * e.g {year: xxxx, month: xx, day: xx} to recommended -> yyyy/mm/dd
   * @param date the date from the input form
   */
  formatDate(date): string {
    const year = date.year;
    const month = date.month;
    const day = date.day;

    return  date ? year + '-' + month + '-' + day : null; // date yyyy-mm-dd
  }

  /**
   * Format the time from the input form, from object-based {hours: xx, minutes: xx, seconds: xx}
   * to recommended hours:minutes:seconds (h:m:s)
   * @param time to be formatted as recommended
   */
  formatTime(time): string {
    return time ? time.hour + ':' + time.minute + ':' + time.second : null;
  }

  /**
   * converts a string date Type format to a date usable for ng-bootstrap
   * which is the NgbDateStruct format
   * @param date the date to be tranformed
   */
  reformatDate(date: string): NgbDateStruct {
    const temp = date.split('-');

    return date ? { year: parseInt(temp[0], 10), month: parseInt(temp[1], 10), day: parseInt(temp[2], 10)} : null;
  }

  /**
   * Converts the string time format (<- how its stored in the db) to the
   * recommend Type format (NgbTimeStruct) used by ng-bootstrap-time
   * @param time to be formatted appropriatly
   */
  reformatTime(time: string): NgbTimeStruct {
    const temp = time.split(':');

    return time ? { hour: parseInt(temp[0], 10), minute: parseInt(temp[1], 10), second: parseInt(temp[2], 10) } : null;
  }

}
