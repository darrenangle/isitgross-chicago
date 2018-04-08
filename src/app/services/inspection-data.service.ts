import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Inspection } from './../models/inspection';
import { QueryBuilderService } from './query-builder.service';
import { LoggingService } from './logging.service';


@Injectable()
export class InspectionDataService {
  private queryURL = 'https://data.cityofchicago.org/resource/cwig-ma7x.json?$q=&$where=(results=%27Fail%27)&$limit=100';

  constructor(
    private queryService: QueryBuilderService,
    private log: LoggingService,
    private http: HttpClient ) { }

  getInspections(): Observable<Inspection[]> {
    this.queryURL = this.queryService.getQuery();
    return this.http.get<Inspection[]>(this.queryURL)
    .pipe(
      tap(inspections => this.log.logActivity(`fetched inspections`)),
      catchError(this.handleError('getInspections', []) )
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
