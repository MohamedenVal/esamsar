import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSidbarComponent } from './admin-sidbar.component';

describe('AdminSidbarComponent', () => {
  let component: AdminSidbarComponent;
  let fixture: ComponentFixture<AdminSidbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSidbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSidbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
