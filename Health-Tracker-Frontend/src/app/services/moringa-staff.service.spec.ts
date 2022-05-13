import { TestBed } from '@angular/core/testing';

import { MoringaStaffService } from './moringa-staff.service';

describe('MoringaStaffService', () => {
  let service: MoringaStaffService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoringaStaffService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
