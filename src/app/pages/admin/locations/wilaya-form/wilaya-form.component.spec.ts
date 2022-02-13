import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WilayaFormComponent } from './wilaya-form.component';

describe('WilayaFormComponent', () => {
  let component: WilayaFormComponent;
  let fixture: ComponentFixture<WilayaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WilayaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WilayaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
