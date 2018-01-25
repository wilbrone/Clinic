import { TestBed, inject } from '@angular/core/testing';

import { DiagnosesService } from './diagnoses.service';

describe('DiagnosesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DiagnosesService]
    });
  });

  it('should be created', inject([DiagnosesService], (service: DiagnosesService) => {
    expect(service).toBeTruthy();
  }));
});
