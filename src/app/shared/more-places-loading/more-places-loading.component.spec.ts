import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MorePlacesLoadingComponent } from './more-places-loading.component';

describe('MorePlacesLoadingComponent', () => {
  let component: MorePlacesLoadingComponent;
  let fixture: ComponentFixture<MorePlacesLoadingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MorePlacesLoadingComponent]
    });
    fixture = TestBed.createComponent(MorePlacesLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
