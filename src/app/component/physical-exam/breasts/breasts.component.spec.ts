import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreastsComponent } from './breasts.component';

describe('BreastsComponent', () => {
  let component: BreastsComponent;
  let fixture: ComponentFixture<BreastsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreastsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreastsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
