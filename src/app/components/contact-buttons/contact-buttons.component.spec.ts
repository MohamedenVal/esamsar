import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactButtonsComponent } from './contact-buttons.component';

describe('ContactButtonsComponent', () => {
  let component: ContactButtonsComponent;
  let fixture: ComponentFixture<ContactButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
