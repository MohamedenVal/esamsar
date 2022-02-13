import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MogataComponent } from './mogata.component';

describe('MogataComponent', () => {
  let component: MogataComponent;
  let fixture: ComponentFixture<MogataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MogataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MogataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
