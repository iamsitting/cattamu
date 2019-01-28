import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiblestudyinfoComponent } from './biblestudyinfo.component';

describe('BiblestudyinfoComponent', () => {
  let component: BiblestudyinfoComponent;
  let fixture: ComponentFixture<BiblestudyinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiblestudyinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiblestudyinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
