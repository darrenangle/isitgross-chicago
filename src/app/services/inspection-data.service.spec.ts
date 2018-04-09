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
});
