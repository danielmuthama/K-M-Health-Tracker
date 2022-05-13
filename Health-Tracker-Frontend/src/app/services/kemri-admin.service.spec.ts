import { TestBed } from '@angular/core/testing';

import { KemriAdminService } from './kemri-admin.service';

describe('KemriAdminService', () => {
  let service: KemriAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KemriAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
