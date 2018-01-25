import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewKneeComponent } from './new-knee.component';

describe('NewKneeComponent', () => {
  let component: NewKneeComponent;
  let fixture: ComponentFixture<NewKneeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewKneeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewKneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
