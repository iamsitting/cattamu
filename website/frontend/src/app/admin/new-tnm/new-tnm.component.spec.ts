import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTnmComponent } from './new-tnm.component';

describe('NewTnmComponent', () => {
  let component: NewTnmComponent;
  let fixture: ComponentFixture<NewTnmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTnmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTnmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
