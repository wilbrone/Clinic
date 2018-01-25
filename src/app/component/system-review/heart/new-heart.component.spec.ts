import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHeartComponent } from './new-heart.component';

describe('NewHeartComponent', () => {
  let component: NewHeartComponent;
  let fixture: ComponentFixture<NewHeartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewHeartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewHeartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
