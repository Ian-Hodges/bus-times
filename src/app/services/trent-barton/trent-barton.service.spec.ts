import { TestBed } from '@angular/core/testing';

import { TrentBartonService } from './trent-barton.service';

describe('TrentBartonService', () => {
  let service: TrentBartonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrentBartonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
