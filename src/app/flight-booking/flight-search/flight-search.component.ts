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

  flights: Flight[] = [];

  selectedFlight: Flight;

  basket: object = {
    "3": true,
    "5": true
  };

  constructor(
    private flightService: FlightService) {
  }

  ngOnInit() {
      this.flightService.find('', '').subscribe(
        flights => {
          this.flights = flights;
        },
        err => console.error('err', err)
      );
  }

  search() {

    this.flightService.find(this.from, this.to).subscribe(
      flights => {
        this.flights = flights;
      },
      err => console.error('err', err)
    );

  }

  select(f: Flight) {
    this.selectedFlight = f;
  }

}
