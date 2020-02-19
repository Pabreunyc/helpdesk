import { TestBed } from '@angular/core/testing';

import { MessagesServiceService } from './messages-service.service';

describe('MessagesServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MessagesServiceService = TestBed.get(MessagesServiceService);
    expect(service).toBeTruthy();
  });
});
