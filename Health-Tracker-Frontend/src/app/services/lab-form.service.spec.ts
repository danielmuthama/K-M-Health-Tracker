import { TestBed } from '@angular/core/testing';

import { LabFormService } from './lab-form.service';

describe('LabFormService', () => {
  let service: LabFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LabFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
