import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WednesdayBsComponent } from './wednesday-bs.component';

describe('WednesdayBsComponent', () => {
  let component: WednesdayBsComponent;
  let fixture: ComponentFixture<WednesdayBsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WednesdayBsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WednesdayBsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


