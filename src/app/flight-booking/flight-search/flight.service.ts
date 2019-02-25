import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Flight } from '../../entities/flight';
import { HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';



@Injectable()
export class DefaultFlightService implements FlightService {


  constructor(private http: HttpClient) { }

  flights: Flight[] = [];

  load(from: string, to: string) {
    this.find(from, to).subscribe(
      flights => { this.flights= flights; },
      err => { console.error('err', err); }
    );
  }

  find(from: string, to: string): Observable<Flight[]> {
    const url = 'http://www.angular.at/api/flight';

    const headers = new HttpHeaders().set('Accept', 'application/json');
    const params = new HttpParams().set('from', from).set('to', to);

    return this.http.get<Flight[]>(url, { headers, params });
  }

}

@Injectable()
export class DummyFlightService implements FlightService {

  constructor(private http: HttpClient) { }

  flights: Flight[] = [];

  load(from: string, to: string) { }

  find(from: string, to: string): Observable<Flight[]> {
    return of([{ id: 17, from: 'A', to: 'B', date: '2019-02-22T19:00+01:00', delayed: false}]);
  }

}


const DEBUG = false;

@Injectable({
  providedIn: 'root',
  useFactory: (http: HttpClient) => {
    if (DEBUG) {
      return new DummyFlightService(http);
    }
    else {
      return new DefaultFlightService(http);
    }
  },
  deps: [HttpClient]
})
export abstract class FlightService {

  flights: Flight[];

  abstract load(from: string, to: string);

  abstract find(from: string, to: string): Observable<Flight[]>;
}
