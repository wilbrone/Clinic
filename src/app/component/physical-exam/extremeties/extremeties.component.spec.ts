import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtremetiesComponent } from './extremeties.component';

describe('ExtremetiesComponent', () => {
  let component: ExtremetiesComponent;
  let fixture: ComponentFixture<ExtremetiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtremetiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtremetiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
