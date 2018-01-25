import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewKidneysComponent } from './new-kidneys.component';

describe('NewKidneysComponent', () => {
  let component: NewKidneysComponent;
  let fixture: ComponentFixture<NewKidneysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewKidneysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewKidneysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
