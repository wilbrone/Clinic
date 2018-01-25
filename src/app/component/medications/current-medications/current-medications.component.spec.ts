import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentMedicationsComponent } from './current-medications.component';

describe('CurrentMedicationsComponent', () => {
  let component: CurrentMedicationsComponent;
  let fixture: ComponentFixture<CurrentMedicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentMedicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentMedicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
