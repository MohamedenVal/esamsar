import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MogataFormComponent } from './mogata-form.component';

describe('MogataFormComponent', () => {
  let component: MogataFormComponent;
  let fixture: ComponentFixture<MogataFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MogataFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MogataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
