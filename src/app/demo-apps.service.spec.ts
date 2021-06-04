import { TestBed } from '@angular/core/testing';

import { DemoAppsService } from './demo-apps.service';

describe('DemoAppsService', () => {
  let service: DemoAppsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemoAppsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
