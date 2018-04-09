import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Inspection } from './../models/inspection';
import { QueryBuilderService } from './query-builder.service';
import { LoggingService } from './logging.service';


@Injectable()
export class InspectionDataService {
  private queryURL = '';
  constructor(
    private queryService: QueryBuilderService,
    private log: LoggingService,
    private http: HttpClient ) { }

  inspectionData: Subject<Inspection[]> = new BehaviorSubject<Inspection[]>([]);

  loadInspections() {
    this.queryURL = this.queryService.getQuery();
    this.http.get<Inspection[]>(this.queryURL)
    .subscribe(
      (data: any) => {
        this.inspectionData.next(data);
      },
      (err: any) => catchError(this.handleError('inspection get error', [])),
      () => this.log.logActivity('Inspection Sub Loaded Successfuly')
    );
  }

    getInspectionByInspectionId(id: number): Observable<Inspection> {
     const url = this.queryService.cleanAPIUrl + '&inspection_id=' + id;
     this.log.logActivity('fetching single inspection with url: ' + url);
     return this.http.get<Inspection>(url).pipe(
      map(heroes => heroes[0]),
      tap(_ => this.log.logActivity(`fetched inspection_id=${id}`)),
      catchError(this.handleError<Inspection>(`getInspectionByInspectionId inspection_id=${id}`))
     );
    }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: better job of transforming error for user consumption
      this.log.logError(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
