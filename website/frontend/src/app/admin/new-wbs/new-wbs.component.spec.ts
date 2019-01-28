import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewWbsComponent } from './new-wbs.component';

describe('NewWbsComponent', () => {
  let component: NewWbsComponent;
  let fixture: ComponentFixture<NewWbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewWbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewWbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
