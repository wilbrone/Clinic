import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLungsComponent } from './new-lungs.component';

describe('NewLungsComponent', () => {
  let component: NewLungsComponent;
  let fixture: ComponentFixture<NewLungsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewLungsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewLungsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
