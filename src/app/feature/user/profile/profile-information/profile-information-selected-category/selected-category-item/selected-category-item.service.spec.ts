import { TestBed } from '@angular/core/testing';

import { SelectedCategoryItemDetailsService } from './selected-category-item-details/selected-category-item-details.service';

describe('SelectedCategoryItemDetailsService', () => {
  let service: SelectedCategoryItemDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectedCategoryItemDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
