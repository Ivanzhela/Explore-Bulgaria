import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveItemButtonComponent } from './save-item-button.component';

describe('SaveItemButtonComponent', () => {
  let component: SaveItemButtonComponent;
  let fixture: ComponentFixture<SaveItemButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaveItemButtonComponent]
    });
    fixture = TestBed.createComponent(SaveItemButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
