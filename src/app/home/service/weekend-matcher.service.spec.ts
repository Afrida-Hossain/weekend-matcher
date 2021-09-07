import { TestBed } from '@angular/core/testing';

import { WeekendMatcherService } from './weekend-matcher.service';

describe('WeekendMatcherService', () => {
  let service: WeekendMatcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeekendMatcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
