import { TestBed } from '@angular/core/testing';

import { TapisResoleService } from './tapis-resole.service';

describe('TapisResoleService', () => {
  let service: TapisResoleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TapisResoleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
