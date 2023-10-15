import {TestBed} from '@angular/core/testing';

import {NoopCssClassesService} from './noop-css-classes.service';

describe('NoopHostClassesService', () => {
  let service: NoopCssClassesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoopCssClassesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
