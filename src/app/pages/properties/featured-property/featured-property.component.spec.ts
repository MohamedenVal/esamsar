import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedPropertyComponent } from './featured-property.component';

describe('FeaturedPropertyComponent', () => {
  let component: FeaturedPropertyComponent;
  let fixture: ComponentFixture<FeaturedPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedPropertyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
