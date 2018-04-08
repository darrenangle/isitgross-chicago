import { TestBed, inject } from '@angular/core/testing';

import { InspectionDataService } from './inspection-data.service';

describe('InspectionDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InspectionDataService]
    });
  });

  it('should be created', inject([InspectionDataService], (service: InspectionDataService) => {
    expect(service).toBeTruthy();
  }));
});
