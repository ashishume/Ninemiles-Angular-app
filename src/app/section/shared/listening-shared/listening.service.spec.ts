import { TestBed } from '@angular/core/testing';

import { ListeningService } from './listening.service';

describe('ListeningService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListeningService = TestBed.get(ListeningService);
    expect(service).toBeTruthy();
  });
});
