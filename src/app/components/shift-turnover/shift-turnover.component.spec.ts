import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftTurnoverComponent } from './shift-turnover.component';

describe('ShiftTurnoverComponent', () => {
  let component: ShiftTurnoverComponent;
  let fixture: ComponentFixture<ShiftTurnoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShiftTurnoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiftTurnoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
