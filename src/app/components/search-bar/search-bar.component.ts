import { Component, OnInit } from '@angular/core';
import { QueryBuilderService } from './../../services/query-builder.service';
import { InspectionDataService } from './../../services/inspection-data.service';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';



@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  constructor(
    public queryService: QueryBuilderService,
    private inspectionData: InspectionDataService,
    private _scrollToService: ScrollToService
  ) { }
  config: ScrollToConfigOptions = {
    target: 'results'
  };

  search(): void {
    this.inspectionData.loadInspections();
    setTimeout(() => {
      this._scrollToService.scrollTo(this.config);
    }, 500);
  }

  updateSearchQuery(query: string): void {
    this.queryService.updateTextQuery(query);
  }

  ngOnInit() {
  }

}
