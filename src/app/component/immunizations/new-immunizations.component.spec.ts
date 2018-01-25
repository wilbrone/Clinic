import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewImmunizationsComponent } from './new-immunizations.component';

describe('NewImmunizationsComponent', () => {
  let component: NewImmunizationsComponent;
  let fixture: ComponentFixture<NewImmunizationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewImmunizationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewImmunizationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
