import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPhysicalExamComponent } from './new-physical-exam.component';

describe('NewPhysicalExamComponent', () => {
  let component: NewPhysicalExamComponent;
  let fixture: ComponentFixture<NewPhysicalExamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPhysicalExamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPhysicalExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
