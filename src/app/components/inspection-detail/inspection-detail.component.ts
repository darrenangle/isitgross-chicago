import { Component, OnInit, Pipe } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { InspectionDataService } from '../../services/inspection-data.service';
import { Inspection } from './../../models/inspection';

@Component({
  selector: 'app-inspection-detail',
  templateUrl: './inspection-detail.component.html',
  styleUrls: ['./inspection-detail.component.scss']
})
export class InspectionDetailComponent implements OnInit {
  inspection: Inspection;
  violations: string[] = [];
  constructor(
    private route: ActivatedRoute,
    private inspectionDataService: InspectionDataService,
    private location: Location,
  ) { }

  ngOnInit() {
    this.getInspection();
  }

  getInspection(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.inspectionDataService.getInspectionByInspectionId(id)
      .subscribe(inspection => {
        this.inspection = inspection;
        this.violations = inspection.violations.split('|');
      });

  }

  goBack(): void {
    this.location.back();
  }
}
