import { TestBed } from '@angular/core/testing';

import { KemriStaffService } from './kemri-staff.service';

describe('KemriStaffService', () => {
  let service: KemriStaffService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KemriStaffService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
