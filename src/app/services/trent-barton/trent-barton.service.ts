import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Stop } from 'src/app/models/trent-barton/stop';
import { FullStop } from 'src/app/models/trent-barton/fullStop';
import { environment } from 'src/environments/environment.dev';
import { Service } from 'src/app/models/trent-barton/service';
import { Direction } from 'src/app/models/trent-barton/direction';

@Injectable({
  providedIn: 'root',
})
export class TrentBartonService {
  private trentBartonUrl = environment.trentBartonUrl;

  constructor(private http: HttpClient) {}

  getServices(): Observable<Service[]> {
    return this.http
      .get<Service[]>(`${this.trentBartonUrl}?m=GetServices`)
      .pipe(catchError(this.handleError<Service[]>('GetServices', [])));
  }

  getDirections(serviceId: number): Observable<Direction[]> {
    return this.http
      .get<Service[]>(`${this.trentBartonUrl}?m=GetDirections&service=${serviceId}`)
      .pipe(catchError(this.handleError<Service[]>('getDirections', [])));
  }

  getStops(directionId: number): Observable<Stop[]> {
    return this.http
      .get<Stop[]>(`${this.trentBartonUrl}?m=GetStops&direction=${directionId}`)
      .pipe(catchError(this.handleError<Stop[]>('getStops', [])));
  }

  getStop(stopId: number): Observable<FullStop[]> {
    return this.http
      .get<FullStop[]>(`${this.trentBartonUrl}?m=GetRtiFull&stop=${stopId}`)
      .pipe(catchError(this.handleError<FullStop[]>('getStop')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    };
  }
}
