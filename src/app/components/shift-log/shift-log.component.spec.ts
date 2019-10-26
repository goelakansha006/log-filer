import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftLogComponent } from './shift-log.component';

describe('ShiftLogComponent', () => {
  let component: ShiftLogComponent;
  let fixture: ComponentFixture<ShiftLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShiftLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiftLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
