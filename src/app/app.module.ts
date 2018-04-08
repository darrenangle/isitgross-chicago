import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SearchFiltersComponent } from './components/search-filters/search-filters.component';
import { SearchQueryNotesComponent } from './components/search-query-notes/search-query-notes.component';
import { ResultsHeaderComponent } from './components/results-header/results-header.component';
import { ResultsListComponent } from './components/results-list/results-list.component';
import { InspectionDetailComponent } from './components/inspection-detail/inspection-detail.component';
import { AppRouterModule } from './app-router/app-router.module';
import { FrontPageComponent } from './components/front-page/front-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchBarComponent,
    SearchFiltersComponent,
    SearchQueryNotesComponent,
    ResultsHeaderComponent,
    ResultsListComponent,
    InspectionDetailComponent,
    FrontPageComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
