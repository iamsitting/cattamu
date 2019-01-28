import { TestBed, inject } from '@angular/core/testing';

import { WbsService } from './wbs.service';

describe('WbsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WbsService]
    });
  });

  it('should be created', inject([WbsService], (service: WbsService) => {
    expect(service).toBeTruthy();
  }));
});
