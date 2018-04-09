import { Component, OnInit } from '@angular/core';
import { QueryBuilderService } from './../../services/query-builder.service';
import { InspectionDataService } from './../../services/inspection-data.service';



@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  constructor(
    private queryService: QueryBuilderService,
    private inspectionData: InspectionDataService
  ) { }

  search(): void {
    this.inspectionData.loadInspections();
  }

  ngOnInit() {
  }

}
