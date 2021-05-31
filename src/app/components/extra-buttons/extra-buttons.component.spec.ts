import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraButtonsComponent } from './extra-buttons.component';

describe('ExtraButtonsComponent', () => {
  let component: ExtraButtonsComponent;
  let fixture: ComponentFixture<ExtraButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtraButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
