import { TestBed, inject } from '@angular/core/testing';

import { SystemReviewService } from './system-review.service';

describe('SystemReviewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SystemReviewService]
    });
  });

  it('should be created', inject([SystemReviewService], (service: SystemReviewService) => {
    expect(service).toBeTruthy();
  }));
});
