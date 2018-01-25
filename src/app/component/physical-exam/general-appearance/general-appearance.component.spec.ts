import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralAppearanceComponent } from './general-appearance.component';

describe('GeneralAppearanceComponent', () => {
  let component: GeneralAppearanceComponent;
  let fixture: ComponentFixture<GeneralAppearanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralAppearanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralAppearanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
