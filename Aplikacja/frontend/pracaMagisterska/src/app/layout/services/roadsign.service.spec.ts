import { TestBed } from '@angular/core/testing';

import { RoadsignService } from './roadsign.service';

describe('RoadsignService', () => {
  let service: RoadsignService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoadsignService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
