import { TestBed } from '@angular/core/testing';

import { TapisService } from './tapis.service';

describe('TapisService', () => {
  let service: TapisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TapisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
