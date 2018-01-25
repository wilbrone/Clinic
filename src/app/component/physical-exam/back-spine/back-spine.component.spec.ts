import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackSpineComponent } from './back-spine.component';

describe('BackSpineComponent', () => {
  let component: BackSpineComponent;
  let fixture: ComponentFixture<BackSpineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackSpineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackSpineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
