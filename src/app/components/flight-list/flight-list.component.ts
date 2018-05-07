import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CheapFlightService } from '../../services/cheapflights.service';
import { ActivatedRoute, Params } from '@angular/router';
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

  constructor(private route: ActivatedRoute, private cheapFlightService: CheapFlightService) {}

  ngOnInit() {
    
    this.departure = {
      iataCode: this.route.snapshot.params['depCode'],
      name: this.route.snapshot.params['depName']
    }
    this.destination = {
      iataCode: this.route.snapshot.params['destCode'],
      name: this.route.snapshot.params['destName']
    }
    this.startDate = this.route.snapshot.params['startDate'];
    this.endDate = this.route.snapshot.params['endDate'];

    this.paramsSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.departure.iataCode = params['depCode'];
        this.departure.name = params['depName'];
        this.destination.iataCode = params['destCode'];
        this.destination.name = params['destName'];
        this.startDate = params['startDate'];
        this.endDate = params['endDate'];
      }
    );
    this.onShowFlights(this.departure, this.destination, this.startDate, this.endDate);
  }

  onShowFlights(departure: any, destination: any, startDate: any, endDate: any) {

    this.cheapFlightService.getFlights(departure, destination, startDate, endDate).subscribe(
      (flights: any) => {
        this.flights = flights;
        console.log(this.flights);
      },
      (error) => console.log(error)
    );
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }
}