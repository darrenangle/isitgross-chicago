
import { Component, OnInit } from '@angular/core';
import { LoggingService } from './../../services/logging.service';
import { QueryBuilderService } from './../../services/query-builder.service';

@Component({
  selector: 'app-search-filters',
  templateUrl: './search-filters.component.html',
  styleUrls: ['./search-filters.component.scss']
})
export class SearchFiltersComponent implements OnInit {

  constructor(
    private log: LoggingService,
    private query: QueryBuilderService
  ) { }

  ngOnInit() {
  }


}
