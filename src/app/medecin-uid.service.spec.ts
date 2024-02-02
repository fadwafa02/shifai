import { TestBed } from '@angular/core/testing';

import { MedecinUidService } from './medecin-uid.service';

describe('MedecinUidService', () => {
  let service: MedecinUidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedecinUidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
