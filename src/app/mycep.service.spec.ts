import { TestBed } from '@angular/core/testing';

import { MycepService } from './mycep.service';

describe('MycepService', () => {
  let service: MycepService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MycepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
