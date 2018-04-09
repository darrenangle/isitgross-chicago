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

  it('currentQueryString should return correct default', inject([QueryBuilderService], (service: QueryBuilderService) => {
    expect(service.currentQueryString).toBe('https://data.cityofchicago.org/resource/cwig-ma7x.json?$q=&$where=(results=%27Fail%27)');
  }));

  it('buildQuery with no filter should return correct default', inject([QueryBuilderService], (service: QueryBuilderService) => {
    service.buildQuery();
    // tslint:disable-next-line
    expect(service.currentQueryString).toBe('https://data.cityofchicago.org/resource/cwig-ma7x.json?$q=&$where=(results=%27Fail%27)&$limit=100&$order=inspection_date DESC&$$app_token=C2lg52I1ERs6QufBgQXiAnTRG');
  }));

  it('passed filter should produce correct query String', inject([QueryBuilderService], (service: QueryBuilderService) => {
    service.queryFilterStates.includePassingInspections = true;
    service.buildQuery();
    // tslint:disable-next-line
    expect(service.currentQueryString).toBe('https://data.cityofchicago.org/resource/cwig-ma7x.json?$q=&$where=(results=%27Pass%27%20OR%20results=%27Pass%20w/%20Conditions%27)&$limit=100&$order=inspection_date DESC&$$app_token=C2lg52I1ERs6QufBgQXiAnTRG');
  }));
  it('pests filter should produce correct query String', inject([QueryBuilderService], (service: QueryBuilderService) => {
    service.queryFilterStates.includePests = true;
    service.buildQuery();
    // tslint:disable-next-line
    expect(service.currentQueryString).toBe('https://data.cityofchicago.org/resource/cwig-ma7x.json?$q=&$where=(results=%27Fail%27)%20AND%20(violations%20like%20%27%25RAT%25%27%20OR%20violations%20like%20%27%25MICE%25%27%20OR%20violations%20like%20%27%25RODENT%25%27%20OR%20violations%20like%20%27%25INSECTS%25%27)&$limit=100&$order=inspection_date DESC&$$app_token=C2lg52I1ERs6QufBgQXiAnTRG');
  }));
  it('poisons filter should produce correct query String', inject([QueryBuilderService], (service: QueryBuilderService) => {
    service.queryFilterStates.includePoisons = true;
    service.buildQuery();
    // tslint:disable-next-line
    expect(service.currentQueryString).toBe('https://data.cityofchicago.org/resource/cwig-ma7x.json?$q=&$where=(results=%27Fail%27)%20AND%20(violations%20like%20%27%25POISON%25%27)&$limit=100&$order=inspection_date DESC&$$app_token=C2lg52I1ERs6QufBgQXiAnTRG');
  }));
  it('poo filter should produce correct query String', inject([QueryBuilderService], (service: QueryBuilderService) => {
    service.queryFilterStates.includePoo = true;
    service.buildQuery();
    // tslint:disable-next-line
    expect(service.currentQueryString).toBe('https://data.cityofchicago.org/resource/cwig-ma7x.json?$q=&$where=(results=%27Fail%27)%20AND%20(violations%20like%20%27%25DROPPINGS%25%27%20OR%20violations%20like%20%27%25FECES%25%27)&$limit=100&$order=inspection_date DESC&$$app_token=C2lg52I1ERs6QufBgQXiAnTRG');
  }));

  it('filter combo 1 should produce correct query String', inject([QueryBuilderService], (service: QueryBuilderService) => {
    service.queryFilterStates.includePassingInspections = true;
    service.queryFilterStates.includePoo = true;
    service.queryFilterStates.includePests = true;
    service.buildQuery();
    // tslint:disable-next-line
    expect(service.currentQueryString).toBe('https://data.cityofchicago.org/resource/cwig-ma7x.json?$q=&$where=(results=%27Pass%27%20OR%20results=%27Pass%20w/%20Conditions%27)%20AND%20(violations%20like%20%27%25DROPPINGS%25%27%20OR%20violations%20like%20%27%25FECES%25%27)%20AND%20(violations%20like%20%27%25RAT%25%27%20OR%20violations%20like%20%27%25MICE%25%27%20OR%20violations%20like%20%27%25RODENT%25%27%20OR%20violations%20like%20%27%25INSECTS%25%27)&$limit=100&$order=inspection_date DESC&$$app_token=C2lg52I1ERs6QufBgQXiAnTRG');
  }));

  it('filter combo 2 should produce correct query String', inject([QueryBuilderService], (service: QueryBuilderService) => {
    service.queryFilterStates.includePoisons = true;
    service.queryFilterStates.includePests = true;
    service.buildQuery();
    // tslint:disable-next-line
    expect(service.currentQueryString).toBe('https://data.cityofchicago.org/resource/cwig-ma7x.json?$q=&$where=(results=%27Fail%27)%20AND%20(violations%20like%20%27%25RAT%25%27%20OR%20violations%20like%20%27%25MICE%25%27%20OR%20violations%20like%20%27%25RODENT%25%27%20OR%20violations%20like%20%27%25INSECTS%25%27)%20AND%20(violations%20like%20%27%25POISON%25%27)&$limit=100&$order=inspection_date DESC&$$app_token=C2lg52I1ERs6QufBgQXiAnTRG');
  }));

  it('text input should produce correct text search query', inject([QueryBuilderService], (service: QueryBuilderService) => {
    service.updateTextQuery('taco bell');
    service.buildQuery();
    // tslint:disable-next-line
    expect(service.currentQueryString).toBe('https://data.cityofchicago.org/resource/cwig-ma7x.json?$q=taco%20bell&$where=(results=%27Fail%27)&$limit=100&$order=inspection_date DESC&$$app_token=C2lg52I1ERs6QufBgQXiAnTRG');
  }));

  // tslint:disable-next-line
  it('text input combined with filters should produce filtered text search query', inject([QueryBuilderService], (service: QueryBuilderService) => {
    service.updateTextQuery('taco bell');
    service.queryFilterStates.includePassingInspections = true;
    service.queryFilterStates.includePoo = true;
    service.queryFilterStates.includePests = true;
    service.buildQuery();
    // tslint:disable-next-line
    expect(service.currentQueryString).toBe('https://data.cityofchicago.org/resource/cwig-ma7x.json?$q=taco%20bell&$where=(results=%27Pass%27%20OR%20results=%27Pass%20w/%20Conditions%27)%20AND%20(violations%20like%20%27%25DROPPINGS%25%27%20OR%20violations%20like%20%27%25FECES%25%27)%20AND%20(violations%20like%20%27%25RAT%25%27%20OR%20violations%20like%20%27%25MICE%25%27%20OR%20violations%20like%20%27%25RODENT%25%27%20OR%20violations%20like%20%27%25INSECTS%25%27)&$limit=100&$order=inspection_date DESC&$$app_token=C2lg52I1ERs6QufBgQXiAnTRG');
  }));
});
