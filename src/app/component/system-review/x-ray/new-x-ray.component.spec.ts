import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewXRayComponent } from './new-x-ray.component';

describe('NewXRayComponent', () => {
  let component: NewXRayComponent;
  let fixture: ComponentFixture<NewXRayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewXRayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewXRayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
