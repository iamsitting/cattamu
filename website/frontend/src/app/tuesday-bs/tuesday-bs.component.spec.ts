import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TuesdayBsComponent } from './tuesday-bs.component';

describe('TuesdayBsComponent', () => {
  let component: TuesdayBsComponent;
  let fixture: ComponentFixture<TuesdayBsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuesdayBsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TuesdayBsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
