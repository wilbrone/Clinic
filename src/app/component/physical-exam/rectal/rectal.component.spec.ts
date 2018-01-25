import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RectalComponent } from './rectal.component';

describe('RectalComponent', () => {
  let component: RectalComponent;
  let fixture: ComponentFixture<RectalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RectalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RectalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
