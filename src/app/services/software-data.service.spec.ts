import { TestBed } from '@angular/core/testing';

import { SoftwareDataService } from './software-data.service';

describe('SoftwareDataService', () => {
  let service: SoftwareDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoftwareDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
