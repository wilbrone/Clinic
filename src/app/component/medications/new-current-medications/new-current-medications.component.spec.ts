import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCurrentMedicationsComponent } from './new-current-medications.component';

describe('NewCurrentMedicationsComponent', () => {
  let component: NewCurrentMedicationsComponent;
  let fixture: ComponentFixture<NewCurrentMedicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCurrentMedicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCurrentMedicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
