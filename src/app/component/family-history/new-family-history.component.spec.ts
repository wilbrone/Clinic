import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFamilyHistoryComponent } from './new-family-history.component';

describe('NewFamilyHistoryComponent', () => {
  let component: NewFamilyHistoryComponent;
  let fixture: ComponentFixture<NewFamilyHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewFamilyHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFamilyHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
