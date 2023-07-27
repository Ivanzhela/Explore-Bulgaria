import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NearbyPlacesComponent } from './nearby-places.component';

describe('NearbyPlacesComponent', () => {
  let component: NearbyPlacesComponent;
  let fixture: ComponentFixture<NearbyPlacesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NearbyPlacesComponent]
    });
    fixture = TestBed.createComponent(NearbyPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
