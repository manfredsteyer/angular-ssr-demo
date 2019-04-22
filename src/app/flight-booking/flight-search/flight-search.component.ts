import { Component, OnInit } from '@angular/core';
import { Flight } from '../../entities/flight';
import { FlightService } from './flight.service';
import { makeStateKey, TransferState } from '@angular/platform-browser';

const FLIGHTS_STATE_KEY = makeStateKey('flights');

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
})
export class FlightSearchComponent implements OnInit {

  from: string;
  to: string;

  flights: Flight[] = [];

  selectedFlight: Flight;

  basket: object = {
    "3": true,
    "5": true
  };

  constructor(
    private flightService: FlightService,
    private state: TransferState) {
  }

  ngOnInit() {

    this.flights = this.state.get(FLIGHTS_STATE_KEY, []);

    if (this.flights.length === 0) {
      this.flightService.find('', '').subscribe(
        flights => {
          this.flights = flights;
          this.state.set(FLIGHTS_STATE_KEY, flights);
        },
        err => console.error('err', err)
      );
    }

  }

  search() {

    this.flightService.find(this.from, this.to).subscribe(
      flights => {
        this.flights = flights;
        this.state.set(FLIGHTS_STATE_KEY, flights);
      },
      err => console.error('err', err)
    );

  }

  select(f: Flight) {
    this.selectedFlight = f;
  }

}
