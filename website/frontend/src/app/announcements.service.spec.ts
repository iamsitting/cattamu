import { TestBed, inject } from '@angular/core/testing';

import { AnnouncementsService } from './announcements.service';

describe('AnnouncementsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnnouncementsService]
    });
  });

  it('should be created', inject([AnnouncementsService], (service: AnnouncementsService) => {
    expect(service).toBeTruthy();
  }));
});
