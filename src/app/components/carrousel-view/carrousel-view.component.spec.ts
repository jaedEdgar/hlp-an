import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrouselViewComponent } from './carrousel-view.component';

describe('CarrouselViewComponent', () => {
  let component: CarrouselViewComponent;
  let fixture: ComponentFixture<CarrouselViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrouselViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrouselViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
