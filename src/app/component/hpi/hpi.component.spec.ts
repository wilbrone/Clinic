import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HpiComponent } from './hpi.component';

describe('HpiComponent', () => {
  let component: HpiComponent;
  let fixture: ComponentFixture<HpiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HpiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
