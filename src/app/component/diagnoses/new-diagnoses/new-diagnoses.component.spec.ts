import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDiagnosesComponent } from './new-diagnoses.component';

describe('NewDiagnosesComponent', () => {
  let component: NewDiagnosesComponent;
  let fixture: ComponentFixture<NewDiagnosesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDiagnosesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDiagnosesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
