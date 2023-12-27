import { TestBed } from '@angular/core/testing';

import { GetMedecinsService } from './get-medecins.service';

describe('GetMedecinsService', () => {
  let service: GetMedecinsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetMedecinsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
