import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemamdsComponent } from './demamds.component';

describe('DemamdsComponent', () => {
  let component: DemamdsComponent;
  let fixture: ComponentFixture<DemamdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemamdsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemamdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
