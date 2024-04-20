import { TestBed } from '@angular/core/testing';

import { UsdaServiceService } from './usda-service.service';

describe('UsdaServiceService', () => {
  let service: UsdaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsdaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
