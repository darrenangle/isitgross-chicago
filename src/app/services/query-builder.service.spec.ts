import { LoggingService } from './logging.service';
import { InspectionDataService } from './inspection-data.service';
import { HttpClientModule } from '@angular/common/http';
import { TestBed, inject } from '@angular/core/testing';

import { QueryBuilderService } from './query-builder.service';

describe('QueryBuilderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [
        InspectionDataService,
        QueryBuilderService,
        LoggingService,
      ]
    });
  });

  it('should be created', inject([QueryBuilderService], (service: QueryBuilderService) => {
    expect(service).toBeTruthy();
  }));
});
