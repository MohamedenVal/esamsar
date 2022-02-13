import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MogatasListComponent } from './mogatas-list.component';

describe('MogatasListComponent', () => {
  let component: MogatasListComponent;
  let fixture: ComponentFixture<MogatasListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MogatasListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MogatasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
