import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorInputComponent } from './visitor-input.component';

describe('VisitorInputComponent', () => {
  let component: VisitorInputComponent;
  let fixture: ComponentFixture<VisitorInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitorInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
