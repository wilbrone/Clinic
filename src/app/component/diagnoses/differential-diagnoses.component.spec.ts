import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DifferentialDiagnosesComponent } from './differential-diagnoses.component';

describe('DifferentialDiagnosesComponent', () => {
  let component: DifferentialDiagnosesComponent;
  let fixture: ComponentFixture<DifferentialDiagnosesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DifferentialDiagnosesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DifferentialDiagnosesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
