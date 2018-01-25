import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSocialHistoryComponent } from './new-social-history.component';

describe('NewSocialHistoryComponent', () => {
  let component: NewSocialHistoryComponent;
  let fixture: ComponentFixture<NewSocialHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSocialHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSocialHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
