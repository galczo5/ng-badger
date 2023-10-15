import {TestBed} from '@angular/core/testing';

import {NoopStylesService} from './noop-styles.service';

describe('NoopStylesService', () => {
  let service: NoopStylesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoopStylesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
