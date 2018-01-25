import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarUtilsComponent } from './calendar-utils.component';

describe('CalendarUtilsComponent', () => {
  let component: CalendarUtilsComponent;
  let fixture: ComponentFixture<CalendarUtilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarUtilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarUtilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
