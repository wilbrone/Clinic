import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenetaliaComponent } from './genetalia.component';

describe('GenetaliaComponent', () => {
  let component: GenetaliaComponent;
  let fixture: ComponentFixture<GenetaliaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenetaliaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenetaliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
