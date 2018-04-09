import { LoggingService } from './../../services/logging.service';
import { QueryBuilderService } from './../../services/query-builder.service';
import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { InspectionDataService } from '../../services/inspection-data.service';

import { InspectionsSearchResultsListComponent } from './inspections-search-results-list.component';


describe('InspectionsSearchResultsListComponent', () => {
  let component: InspectionsSearchResultsListComponent;
  let fixture: ComponentFixture<InspectionsSearchResultsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InspectionsSearchResultsListComponent ],
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      providers: [
        InspectionDataService,
        QueryBuilderService,
        LoggingService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspectionsSearchResultsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
