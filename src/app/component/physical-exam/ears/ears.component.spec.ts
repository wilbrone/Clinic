import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EarsComponent } from './ears.component';

describe('EarsComponent', () => {
  let component: EarsComponent;
  let fixture: ComponentFixture<EarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
