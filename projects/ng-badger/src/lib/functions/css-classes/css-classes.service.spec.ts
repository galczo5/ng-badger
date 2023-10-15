import {TestBed} from '@angular/core/testing';

import {CssClassesService} from './css-classes.service';

describe('HostClassesService', () => {
  let service: CssClassesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CssClassesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
