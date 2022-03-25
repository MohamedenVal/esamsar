import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandsListComponent } from './demands-list.component';

describe('DemandsListComponent', () => {
  let component: DemandsListComponent;
  let fixture: ComponentFixture<DemandsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
