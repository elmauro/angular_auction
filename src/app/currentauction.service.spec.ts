import { TestBed } from '@angular/core/testing';

import { CurrentauctionService } from './currentauction.service';

describe('CurrentauctionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CurrentauctionService = TestBed.get(CurrentauctionService);
    expect(service).toBeTruthy();
  });
});
