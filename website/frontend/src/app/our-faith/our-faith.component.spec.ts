import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurFaithComponent } from './our-faith.component';

describe('OurFaithComponent', () => {
  let component: OurFaithComponent;
  let fixture: ComponentFixture<OurFaithComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurFaithComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurFaithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
