import { LoggingService } from './logging.service';
import { Injectable } from '@angular/core';

@Injectable()
export class QueryBuilderService {
  private cleanAPIUrl = 'https://data.cityofchicago.org/resource/cwig-ma7x.json?$q=';
  private textQuery = '';

  public queryFilterStates = {
    includePassingInspections: false,
    includePoo: false,
    includePests: false,
    includePoisons: false,
  };

  public queryFilterStrings = {
    whereFailOnly: '&$where=(results=\'Fail\')',
    whereIncludePassing: '&$where=(results=\'Fail\' OR results=\'Pass\' OR results=\'Pass w/ Conditions\')',
  };

  // Default States for query:
  private whereFilter = this.queryFilterStrings.whereFailOnly;
  private currentQueryString = this.cleanAPIUrl + this.textQuery + this.whereFilter;

  updateTextQuery(text: string): void {
    this.textQuery = text;
    this.buildQuery();
  }

  getFilterState(state: string) {
    return this.queryFilterStates[state];
  }

  toggleFilter(state: string): void {
    this.queryFilterStates[state] = !this.queryFilterStates[state];
    this.log.logActivity('toggling filter: ' + state);
    this.buildQuery();
    this.log.logActivity('Current Query: ' + this.currentQueryString );
  }

  buildQuery(): void {
    let newQuery = '';
    newQuery = this.cleanAPIUrl + this.textQuery;
    this.whereFilter =
      this.queryFilterStates.includePassingInspections ?
      this.queryFilterStrings.whereIncludePassing : this.queryFilterStrings.whereFailOnly;
    newQuery = newQuery + this.whereFilter;
    this.currentQueryString = newQuery;
  }

  getQuery() {
    return this.currentQueryString;
  }

  constructor(private log: LoggingService) { }

}
