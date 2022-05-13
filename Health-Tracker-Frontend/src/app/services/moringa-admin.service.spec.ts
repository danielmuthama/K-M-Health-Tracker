import { TestBed } from '@angular/core/testing';

import { MoringaAdminService } from './moringa-admin.service';

describe('MoringaAdminService', () => {
  let service: MoringaAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoringaAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
