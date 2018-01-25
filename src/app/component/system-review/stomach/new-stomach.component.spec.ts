import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewStomachComponent } from './new-stomach.component';

describe('NewStomachComponent', () => {
  let component: NewStomachComponent;
  let fixture: ComponentFixture<NewStomachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewStomachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewStomachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
