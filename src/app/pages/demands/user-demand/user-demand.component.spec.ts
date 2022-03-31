import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDemandComponent } from './user-demand.component';

describe('UserDemandComponent', () => {
  let component: UserDemandComponent;
  let fixture: ComponentFixture<UserDemandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDemandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDemandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
