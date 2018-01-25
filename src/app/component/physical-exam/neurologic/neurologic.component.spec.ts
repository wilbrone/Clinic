import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeurologicComponent } from './neurologic.component';

describe('NeurologicComponent', () => {
  let component: NeurologicComponent;
  let fixture: ComponentFixture<NeurologicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeurologicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeurologicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
