import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paidOrNot'
})
export class PaidOrNotPipe implements PipeTransform {

  transform(value: number, args?: any): any {
    return value ? 'Paid' : 'Not Paid';
  }

}
