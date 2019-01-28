import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowdyweekeventsComponent } from './howdyweekevents.component';

describe('HowdyweekeventsComponent', () => {
  let component: HowdyweekeventsComponent;
  let fixture: ComponentFixture<HowdyweekeventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowdyweekeventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowdyweekeventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
