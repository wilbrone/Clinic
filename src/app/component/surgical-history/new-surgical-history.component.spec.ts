import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSurgicalHistoryComponent } from './new-surgical-history.component';

describe('NewSurgicalHistoryComponent', () => {
  let component: NewSurgicalHistoryComponent;
  let fixture: ComponentFixture<NewSurgicalHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSurgicalHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSurgicalHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
