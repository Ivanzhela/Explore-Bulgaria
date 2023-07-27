import { TestBed } from '@angular/core/testing';

import { PlaceItemService } from './place-item.service';

describe('PlaceItemService', () => {
  let service: PlaceItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlaceItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
