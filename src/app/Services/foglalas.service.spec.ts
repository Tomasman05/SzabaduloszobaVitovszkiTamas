import { TestBed } from '@angular/core/testing';

import { FoglalasServiceService } from './foglalas.service';

describe('FoglalasServiceService', () => {
  let service: FoglalasServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoglalasServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
