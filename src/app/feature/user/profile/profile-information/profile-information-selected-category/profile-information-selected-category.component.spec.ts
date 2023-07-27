import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileInformationSelectedCategoryComponent } from './profile-information-selected-category.component';

describe('ProfileInformationSelectedCategoryComponent', () => {
  let component: ProfileInformationSelectedCategoryComponent;
  let fixture: ComponentFixture<ProfileInformationSelectedCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileInformationSelectedCategoryComponent]
    });
    fixture = TestBed.createComponent(ProfileInformationSelectedCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
