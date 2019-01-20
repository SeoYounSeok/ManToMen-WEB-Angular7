import { TestBed } from '@angular/core/testing';

import { RauthService } from './rauth.service';

describe('RauthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RauthService = TestBed.get(RauthService);
    expect(service).toBeTruthy();
  });
});
