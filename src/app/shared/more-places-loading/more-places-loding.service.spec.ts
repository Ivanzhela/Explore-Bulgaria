import { TestBed } from '@angular/core/testing';

import { MorePlacesLodingService } from './more-places-loding.service';

describe('MorePlacesLodingService', () => {
  let service: MorePlacesLodingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MorePlacesLodingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
