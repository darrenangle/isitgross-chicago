import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchQueryNotesComponent } from './search-query-notes.component';

describe('SearchQueryNotesComponent', () => {
  let component: SearchQueryNotesComponent;
  let fixture: ComponentFixture<SearchQueryNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchQueryNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchQueryNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
