import { TestBed } from '@angular/core/testing';

import { KemriService } from './kemri.service';

describe('KemriService', () => {
  let service: KemriService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KemriService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
