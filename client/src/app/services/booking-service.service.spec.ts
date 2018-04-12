import { TestBed, inject } from '@angular/core/testing';

import { BookingServiceService } from './booking-service.service';

describe('BookingServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookingServiceService]
    });
  });

  it('should be created', inject([BookingServiceService], (service: BookingServiceService) => {
    expect(service).toBeTruthy();
  }));
});
