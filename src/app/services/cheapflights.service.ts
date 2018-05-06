import { Injectable } from "@angular/core";
import { DatePipe } from '@angular/common'
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/Rx";

@Injectable()
export class CheapFlightService {

  constructor(private http: Http) {}

  getFlights(departure: any, destination: any, startDate: any, endDate: any) {
    return this.http.get('https://murmuring-ocean-10826.herokuapp.com/en/api/2/flights/from/' + 
    departure + '/to/' + destination + '/' + startDate + '/' + endDate + '/250/unique/?limit=15&offset-0')
    .map(
      (response: Response) => {
      const data = response.json();
      return data.flights.sort((a,b) => a.price - b.price);
    }
    ).catch(
      (error: Response) => {
        return Observable.throw("Error while getting the flights");
      }
    );
  }
}