import { TestBed } from '@angular/core/testing';

import { MoringaService } from './moringa.service';

describe('MoringaService', () => {
  let service: MoringaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoringaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
