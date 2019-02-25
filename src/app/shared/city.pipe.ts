import { Pipe, PipeTransform } from '@angular/core';
import { FlightService } from '../flight-booking/flight-search/flight.service';

@Pipe({
  name: 'city',
  pure: true
})
export class CityPipe implements PipeTransform {

  constructor(private flightService: FlightService) {

  }

  transform(city: string, fmt: string): string {

    let short, long;

    switch(city) {
      case "Frankfurt":
        short = 'FRA';
        long = 'Airport Frankfurt International';
        break;
      case "Hamburg":
        short = 'HAM';
        long = 'Aiport Hamburg Helmut Schmidt';
        break;
      case "Graz":
        short = 'GRZ';
        long = 'Flughafen Graz Thalerhof';
        break;
      default:
        short = long = city;

    }

    if (fmt === 'short') return short;
    return long;


  }

}
