import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishChooseComponent } from './finish-choose.component';

describe('FinishChooseComponent', () => {
  let component: FinishChooseComponent;
  let fixture: ComponentFixture<FinishChooseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinishChooseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishChooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
