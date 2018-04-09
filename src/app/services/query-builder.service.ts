import { LoggingService } from './logging.service';
import { Injectable } from '@angular/core';

@Injectable()
export class QueryBuilderService {
  public cleanAPIUrl = 'https://data.cityofchicago.org/resource/cwig-ma7x.json?$q=';
  private textQuery = '';
  private resultLimit = '&$limit=100';
  private order = '&$order=inspection_date DESC';
  private token = '&$$app_token=C2lg52I1ERs6QufBgQXiAnTRG';

  private queryFilterStates = {
    includePassingInspections: false,
    includePoo: false,
    includePests: false,
    includePoisons: false,
  };

  private queryFilterStrings = {
    whereFailOnly: '&$where=(results=%27Fail%27)',
    whereIncludePassing: '&$where=(results=%27Pass%27%20OR%20results=%27Pass%20w/%20Conditions%27)',
    andIncludePoo: '%20AND%20(violations%20like%20%27%25DROPPINGS%25%27%20OR%20violations%20like%20%27%25FECES%25%27)',
    // tslint:disable-next-line
    andIncludePests: '%20AND%20(violations%20like%20%27%25RAT%25%27%20OR%20violations%20like%20%27%25MICE%25%27%20OR%20violations%20like%20%27%25RODENT%25%27%20OR%20violations%20like%20%27%25INSECTS%25%27)',
    andIncludePoison: '%20AND%20(violations%20like%20%27%25POISON%25%27)',
  };

  // Default States for query:
  private whereFilter = this.queryFilterStrings.whereFailOnly;
  private currentQueryString = this.cleanAPIUrl + this.textQuery + this.whereFilter;

  updateTextQuery(text: string): void {
    this.textQuery = encodeURI(text);
    this.buildQuery();
  }

  toggleFilter(state: string): void {
    this.queryFilterStates[state] = !this.queryFilterStates[state];
    this.log.logActivity('toggling filter: ' + state);
    this.buildQuery();
  }

  buildQuery(): void {
    let newQuery = '';
    newQuery = this.cleanAPIUrl + this.textQuery;
    // Check WHERE filter state and add appropriate string to new Query;
    // tslint:disable-next-line
    newQuery += this.queryFilterStates.includePassingInspections ? this.queryFilterStrings.whereIncludePassing : this.queryFilterStrings.whereFailOnly;

    // Check Poo filter state and add appropriate string to new Query;
    newQuery +=  this.queryFilterStates.includePoo ? this.queryFilterStrings.andIncludePoo : '';

    // Check Pest filter state and add appropriate string to new Query;
    newQuery += this.queryFilterStates.includePests ? this.queryFilterStrings.andIncludePests : '';

    // Check Poison filter state and add appropriate string to new Query;
    newQuery += this.queryFilterStates.includePoisons ? this.queryFilterStrings.andIncludePoison : '';

    // Add limit to new query and finish build
    this.currentQueryString = newQuery + this.resultLimit + this.order + this.token;
    this.log.logActivity('Current Query: ' + this.currentQueryString );
  }

  getQuery() {
    return this.currentQueryString;
  }

  constructor(private log: LoggingService) { }

}
