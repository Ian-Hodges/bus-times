import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Stop as Bus } from 'src/app/models/trent-barton/stop';
import { environment } from 'src/environments/environment.dev';

@Injectable({
  providedIn: 'root',
})
export class TrentBartonService {
  private trentBartonUrl = environment.trentBartonUrl;

  constructor(private http: HttpClient) {}

  getStop(stopId: number): Observable<Bus[]> {
    return this.http
      .get<Bus[]>(`${this.trentBartonUrl}?stopId=${stopId}`)
      .pipe(catchError(this.handleError<Bus[]>('getStop', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    };
  }
}
