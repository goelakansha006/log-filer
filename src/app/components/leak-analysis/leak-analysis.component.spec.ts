import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeakAnalysisComponent } from './leak-analysis.component';

describe('LeakAnalysisComponent', () => {
  let component: LeakAnalysisComponent;
  let fixture: ComponentFixture<LeakAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeakAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeakAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
