import { TestBed } from '@angular/core/testing';

import { BaseGameService } from './base-game.service';

describe('BaseGameService', () => {
  let service: BaseGameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseGameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
