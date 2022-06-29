import { TestBed } from '@angular/core/testing';

import { CompetitionsService } from './competition.service';

describe('CompetitionsService', () => {
  let service: CompetitionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompetitionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
