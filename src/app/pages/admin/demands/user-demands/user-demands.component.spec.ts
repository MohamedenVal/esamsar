import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDemandsComponent } from './user-demands.component';

describe('UserDemandsComponent', () => {
  let component: UserDemandsComponent;
  let fixture: ComponentFixture<UserDemandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDemandsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDemandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
