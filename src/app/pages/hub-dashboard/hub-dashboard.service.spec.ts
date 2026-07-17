import { TestBed } from '@angular/core/testing';

import { HubDashboardService } from './hub-dashboard.service';

describe('HubDashboardService', () => {
  let service: HubDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HubDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
