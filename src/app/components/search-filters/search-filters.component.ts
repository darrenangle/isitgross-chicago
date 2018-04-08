import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-filters',
  templateUrl: './search-filters.component.html',
  styleUrls: ['./search-filters.component.scss']
})
export class SearchFiltersComponent implements OnInit {
  private filterState = {
    includePassingInspections: false,
    includePoo: false,
    includePests: false,
    includePoisons: false,
  };
  constructor() { }

  ngOnInit() {
  }
  toggleFilter(state: string) {
    this.filterState[state] = !this.filterState[state];
    console.log('toggling filter: ' + state);
  }

}
