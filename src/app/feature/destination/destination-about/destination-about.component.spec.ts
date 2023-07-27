import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationAboutComponent } from './destination-about.component';

describe('DestinationAboutComponent', () => {
  let component: DestinationAboutComponent;
  let fixture: ComponentFixture<DestinationAboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DestinationAboutComponent]
    });
    fixture = TestBed.createComponent(DestinationAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
