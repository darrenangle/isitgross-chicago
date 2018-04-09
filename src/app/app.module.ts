import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LoggingService } from './services/logging.service';
import { QueryBuilderService } from './services/query-builder.service';
import { InspectionDataService } from './services/inspection-data.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SearchFiltersComponent } from './components/search-filters/search-filters.component';
import { SearchQueryNotesComponent } from './components/search-query-notes/search-query-notes.component';
import { InspectionDetailComponent } from './components/inspection-detail/inspection-detail.component';
import { AppRouterModule } from './app-router/app-router.module';
import { FrontPageComponent } from './components/front-page/front-page.component';
// tslint:disable-next-line
import { InspectionsSearchResultsListComponent } from './components/inspections-search-results-list/inspections-search-results-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchBarComponent,
    SearchFiltersComponent,
    SearchQueryNotesComponent,
    InspectionDetailComponent,
    FrontPageComponent,
    InspectionsSearchResultsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    HttpClientModule
  ],
  providers: [LoggingService, QueryBuilderService, InspectionDataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
