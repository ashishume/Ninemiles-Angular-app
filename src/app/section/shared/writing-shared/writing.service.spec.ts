import { TestBed } from '@angular/core/testing';

import { WritingService } from './writing.service';

describe('WritingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WritingService = TestBed.get(WritingService);
    expect(service).toBeTruthy();
  });
});
