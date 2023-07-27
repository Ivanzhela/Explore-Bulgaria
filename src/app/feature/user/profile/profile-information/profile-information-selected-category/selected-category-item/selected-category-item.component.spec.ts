import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedCategoryItemComponent } from './selected-category-item.component';

describe('SelectedCategoryItemComponent', () => {
  let component: SelectedCategoryItemComponent;
  let fixture: ComponentFixture<SelectedCategoryItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectedCategoryItemComponent]
    });
    fixture = TestBed.createComponent(SelectedCategoryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
