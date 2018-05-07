import { Http, Response } from "@angular/http";
import  "rxjs/Rx";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AiportsService {

  constructor(private http: Http) {}

  getDepartures() {
    return this.http.get('https://murmuring-ocean-10826.herokuapp.com/en/api/2/forms/flight-booking-selector/')
    .map(
      (response: Response) => {
        const data = response.json();
        return data.airports;
      }
    ).catch(
      (error: Response) => {
        return Observable.throw("Error while getting data");
      }
    );
  }
  getDestinations(iataCode: string) {
    return this.http.get('https://murmuring-ocean-10826.herokuapp.com/en/api/2/forms/flight-booking-selector/')
    .map(
      (response: Response) => {
        const data = response.json();
        const destinations = [];
        for (const destination of data.routes[iataCode]) {
          destinations.push(data.airports.find(x => x.iataCode == destination));
        }
        return destinations;
      }
    ).catch(
      (error: Response) => {
        return Observable.throw("Error while getting data");
      }
    );
  }
}