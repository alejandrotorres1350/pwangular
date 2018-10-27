import { TestBed } from '@angular/core/testing';

import { RestclientServiceService } from './restclient-service.service';

describe('RestclientServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestclientServiceService = TestBed.get(RestclientServiceService);
    expect(service).toBeTruthy();
  });
});
