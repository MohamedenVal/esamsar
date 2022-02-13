import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WilayasListComponent } from './wilayas-list.component';

describe('WilayasListComponent', () => {
  let component: WilayasListComponent;
  let fixture: ComponentFixture<WilayasListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WilayasListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WilayasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
