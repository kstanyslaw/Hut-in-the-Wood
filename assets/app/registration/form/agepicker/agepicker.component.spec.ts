import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgepickerComponent } from './agepicker.component';

describe('AgepickerComponent', () => {
  let component: AgepickerComponent;
  let fixture: ComponentFixture<AgepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
