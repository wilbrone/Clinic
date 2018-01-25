import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacicityComponent } from './spacicity.component';

describe('SpacicityComponent', () => {
  let component: SpacicityComponent;
  let fixture: ComponentFixture<SpacicityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpacicityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacicityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
