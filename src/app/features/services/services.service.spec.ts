import { TestBed } from '@angular/core/testing';

import { FeaturesService } from './services.service';

describe('ServicesService', () => {
  let service: FeaturesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeaturesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
