import { TestBed, inject } from '@angular/core/testing';

import { ChicagoDataService } from './chicago-data.service';

describe('ChicagoDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChicagoDataService]
    });
  });

  it('should be created', inject([ChicagoDataService], (service: ChicagoDataService) => {
    expect(service).toBeTruthy();
  }));
});
