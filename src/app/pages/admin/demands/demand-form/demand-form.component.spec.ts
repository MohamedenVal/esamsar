import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandFormComponent } from './demand-form.component';

describe('DemandFormComponent', () => {
  let component: DemandFormComponent;
  let fixture: ComponentFixture<DemandFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
