import { TestBed } from '@angular/core/testing';

import { SaveItemButtonService } from './save-item-button.service';

describe('SaveItemButtonService', () => {
  let service: SaveItemButtonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveItemButtonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
