import { TestBed } from '@angular/core/testing';

import { CalculateMarksService } from './calculate-marks.service';

describe('CalculateMarksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalculateMarksService = TestBed.get(CalculateMarksService);
    expect(service).toBeTruthy();
  });
});
