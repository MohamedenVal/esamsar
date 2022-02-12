import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertiesPageComponent } from './properties.component';

describe('PropertiesPageComponent', () => {
  let component: PropertiesPageComponent;
  let fixture: ComponentFixture<PropertiesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertiesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertiesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
