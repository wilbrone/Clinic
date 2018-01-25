import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSystemReviewComponent } from './new-system-review.component';

describe('NewSystemReviewComponent', () => {
  let component: NewSystemReviewComponent;
  let fixture: ComponentFixture<NewSystemReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSystemReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSystemReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
