import { TestBed } from '@angular/core/testing';

import { DiabetiqueService } from './diabetique.service';

describe('DiabetiqueService', () => {
  let service: DiabetiqueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiabetiqueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
