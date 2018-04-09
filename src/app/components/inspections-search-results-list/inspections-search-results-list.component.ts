import { Component, OnInit } from '@angular/core';
import { InspectionDataService } from './../../services/inspection-data.service';
import { Inspection } from '../../models/inspection';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';

@Component({
  selector: 'app-inspections-search-results-list',
  templateUrl: './inspections-search-results-list.component.html',
  styleUrls: ['./inspections-search-results-list.component.scss']
})
export class InspectionsSearchResultsListComponent implements OnInit {
  inspections: Inspection[];
  constructor(
    private inspectionDataService: InspectionDataService,
    private _scrollToService: ScrollToService
  ) { }

  config: ScrollToConfigOptions = {
    target: 'results'
  };

  ngOnInit() {
      this
        .inspectionDataService
        .inspectionData
        .subscribe((inspections: Inspection[]) => {
          this.inspections = inspections;
          this._scrollToService.scrollTo(this.config);
        });
  }

}
