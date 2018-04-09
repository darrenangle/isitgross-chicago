
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { InspectionDetailComponent } from './inspection-detail.component';
import { ActivatedRoute } from '@angular/router';
import { InspectionDataService } from '../../services/inspection-data.service';
import { QueryBuilderService } from '../../services/query-builder.service';
import { LoggingService } from '../../services/logging.service';
import { HttpClientModule } from '@angular/common/http';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { APP_BASE_HREF } from '@angular/common';
import { convertToParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';


describe('InspectionDetailComponent', () => {
  let component: InspectionDetailComponent;
  let fixture: ComponentFixture<InspectionDetailComponent>;

  const fakeActivatedRoute = {
    snapshot: { paramMap: convertToParamMap({id: 579837}) }
  };

  beforeEach (async (() => {
    TestBed.configureTestingModule({
      declarations: [ InspectionDetailComponent ],
      providers: [
        { provide: ActivatedRoute,
          useValue: fakeActivatedRoute },
        InspectionDataService,
        QueryBuilderService,
        LoggingService,
        Location,
        { provide: LocationStrategy, useClass: PathLocationStrategy },
        { provide: APP_BASE_HREF, useValue : '/' }
      ],
      imports: [
        HttpClientModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspectionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
