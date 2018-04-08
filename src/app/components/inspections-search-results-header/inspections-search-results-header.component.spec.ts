import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectionsSearchResultsHeaderComponent } from './inspections-search-results-header.component';

describe('InspectionsSearchResultsHeaderComponent', () => {
  let component: InspectionsSearchResultsHeaderComponent;
  let fixture: ComponentFixture<InspectionsSearchResultsHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InspectionsSearchResultsHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspectionsSearchResultsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
