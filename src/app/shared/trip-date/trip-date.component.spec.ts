import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripDateComponent } from './trip-date.component';

describe('TripDateComponent', () => {
  let component: TripDateComponent;
  let fixture: ComponentFixture<TripDateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TripDateComponent]
    });
    fixture = TestBed.createComponent(TripDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
