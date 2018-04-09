import { Component, OnInit } from '@angular/core';
import { InspectionDataService } from './../../services/inspection-data.service';
import { Inspection } from '../../models/inspection';

@Component({
  selector: 'app-inspections-search-results-list',
  templateUrl: './inspections-search-results-list.component.html',
  styleUrls: ['./inspections-search-results-list.component.scss']
})
export class InspectionsSearchResultsListComponent implements OnInit {
  inspections: Inspection[];
  constructor(private inspectionData: InspectionDataService) { }

  ngOnInit() {
    this.getInspections();
    console.log(this.inspections);
  }
  getInspections(): void {
    this.inspectionData.getInspections()
      .subscribe(inspections => this.inspections = inspections);
  }

}
