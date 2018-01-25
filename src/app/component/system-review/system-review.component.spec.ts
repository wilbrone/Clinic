import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemReviewComponent } from './system-review.component';

describe('SystemReviewComponent', () => {
  let component: SystemReviewComponent;
  let fixture: ComponentFixture<SystemReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
