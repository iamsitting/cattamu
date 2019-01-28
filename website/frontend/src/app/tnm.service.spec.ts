import { TestBed, inject } from '@angular/core/testing';

import { TnmService } from './tnm.service';

describe('TnmService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TnmService]
    });
  });

  it('should be created', inject([TnmService], (service: TnmService) => {
    expect(service).toBeTruthy();
  }));
});
