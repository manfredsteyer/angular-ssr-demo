import { Component, OnInit } from '@angular/core';
import { Flight } from '../../entities/flight';
import { FlightService } from './flight.service';

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
})
export class FlightSearchComponent implements OnInit {

  from: string;
  to: string;

  get flights() {
    return this.flightService.flights;
  }

  selectedFlight: Flight;

  basket: object = {
    "3": true,
    "5": true
  };

  constructor(
    private flightService: FlightService) {
  }

  ngOnInit() {
    this.flightService.load('', '');
  }

  search() {

    this.flightService.load(this.from, this.to);

  }

  select(f: Flight) {
    this.selectedFlight = f;
  }

}
