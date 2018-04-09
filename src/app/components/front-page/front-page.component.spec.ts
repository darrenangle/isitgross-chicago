import { QueryBuilderService } from './../../services/query-builder.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FrontPageComponent } from './front-page.component';
import { HeaderComponent } from '../header/header.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { SearchFiltersComponent } from '../search-filters/search-filters.component';
import { InspectionsSearchResultsListComponent } from '../inspections-search-results-list/inspections-search-results-list.component';
import { LoggingService } from '../../services/logging.service';

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
      imports: [RouterTestingModule],
      providers: [
        QueryBuilderService,
        LoggingService
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
