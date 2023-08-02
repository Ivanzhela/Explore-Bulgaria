import { TestBed } from '@angular/core/testing';

import { AddItemButtonService } from './add-item-button.service';

describe('AddItemButtonService', () => {
  let service: AddItemButtonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddItemButtonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
