import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectionsSearchResultsListComponent } from './inspections-search-results-list.component';

describe('InspectionsSearchResultsListComponent', () => {
  let component: InspectionsSearchResultsListComponent;
  let fixture: ComponentFixture<InspectionsSearchResultsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InspectionsSearchResultsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspectionsSearchResultsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
