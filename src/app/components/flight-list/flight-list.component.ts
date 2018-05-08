import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CheapFlightService } from '../../services/cheapflights.service';
import { ActivatedRoute, Params, Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit, OnDestroy {

  paramsSubscription: Subscription;

  departure: {iataCode: string, name: string};
  destination: { iataCode: string, name: string};
  startDate: any;
  endDate: any;

  flights = [
    {
    dateFrom: '',
    dateTo: '',
    currency: '',
    price: 0
  }]

  constructor(private router: Router, private route: ActivatedRoute, private cheapFlightService: CheapFlightService) {

   this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {      

        this.paramsSubscription = this.gatherFlightInfo();
        this.onShowFlights(this.departure, this.destination, this.startDate, this.endDate);
      }
  });
  }
  
  ngOnInit() {
    this.paramsSubscription = this.gatherFlightInfo();
    this.onShowFlights(this.departure, this.destination, this.startDate, this.endDate);
  }

  gatherFlightInfo() {

    return this.route.params.subscribe(
      (params: Params) => {
        this.departure = {
          iataCode: params['depCode'],
          name: params['depName']
        }
        this.destination = {
          iataCode: params['destCode'],
          name: params['destName']
        }
        this.startDate = params['startDate'];
        this.endDate = params['endDate'];
      }
    );
  }

  onShowFlights(departure: any, destination: any, startDate: any, endDate: any) {

    this.cheapFlightService.getFlights(departure, destination, startDate, endDate).subscribe(
      (flights: any) => {
        this.flights = flights;
      },
      (error) => console.log(error)
    );
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }
}