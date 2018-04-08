import { Component, OnInit } from '@angular/core';
import { LoggingService } from './../../services/logging.service';

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
  constructor(private log: LoggingService) { }

  ngOnInit() {
  }
  toggleFilter(state: string) {
    this.filterState[state] = !this.filterState[state];
    this.log.logActivity('toggling filter: ' + state);
  }

}
