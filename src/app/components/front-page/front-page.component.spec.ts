import { QueryBuilderService } from './../../services/query-builder.service';
import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FrontPageComponent } from './front-page.component';
import { HeaderComponent } from '../header/header.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { SearchFiltersComponent } from '../search-filters/search-filters.component';
import { InspectionsSearchResultsListComponent } from '../inspections-search-results-list/inspections-search-results-list.component';
import { LoggingService } from '../../services/logging.service';
import { InspectionDataService } from '../../services/inspection-data.service';
import { ScrollToService } from '@nicky-lenaers/ngx-scroll-to';


describe('FrontPageComponent', () => {
  let component: FrontPageComponent;
  let fixture: ComponentFixture<FrontPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FrontPageComponent,
        HeaderComponent,
        SearchBarComponent,
        SearchFiltersComponent,
        InspectionsSearchResultsListComponent,
      ],
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      providers: [
        QueryBuilderService,
        LoggingService,
        InspectionDataService,
        ScrollToService,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
