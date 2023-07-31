import { TestBed } from '@angular/core/testing';

import { DeleteItemButtonService } from './delete-item-button.service';

describe('DeleteItemButtonService', () => {
  let service: DeleteItemButtonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteItemButtonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
