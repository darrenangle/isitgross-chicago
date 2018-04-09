import { HttpClientModule } from '@angular/common/http';
import { ScrollToService } from '@nicky-lenaers/ngx-scroll-to';
import { LoggingService } from './logging.service';
import { QueryBuilderService } from './query-builder.service';
import { TestBed, inject } from '@angular/core/testing';

import { InspectionDataService } from './inspection-data.service';

describe('InspectionDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [
        InspectionDataService,
        QueryBuilderService,
        LoggingService,
        ScrollToService
      ]
    });
  });

  it('should be created', inject([InspectionDataService], (service: InspectionDataService) => {
    expect(service).toBeTruthy();
  }));

  it('loadInspections should create 1000 inspections', inject([InspectionDataService], (service: InspectionDataService) => {
    service.loadInspections();
    expect(service.inspectionData._value.length == 1000;
  }));
  it('inspection by id exists', inject([InspectionDataService], (service: InspectionDataService) => {
    const inspection = service.getInspectionByInspectionId(579837);
    expect(inspection).toBeTruthy();
  }));
  it('inspection by id data exists and is correct after subscription', inject([InspectionDataService], (service: InspectionDataService) => {
    const inspectionObs = service.getInspectionByInspectionId(2116562);
    const inspection = inspectionObs.subscribe( inspection => {
      expect(inspection.address).toBe('1055 W BRYN MAWR AVE ');
    });

  }));
});
