import { EmailService } from './email.service';
import { TestBed } from '@angular/core/testing';

describe('EmailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmailService = TestBed.get(EmailService);
    expect(service).toBeTruthy();
  });
});
