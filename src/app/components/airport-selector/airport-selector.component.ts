import { Component, Injectable, OnInit, NgModule, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Subscription } from 'rxjs';

import { AiportsService } from '../../services/airports.service';
import { Airport } from '../../models/airport.model';

@Component({
  selector: 'app-airport-selector',
  templateUrl: './airport-selector.component.html',
  styleUrls: ['./airport-selector.component.css']
})
export class AirportSelectorComponent implements OnInit, OnDestroy {

  departuresSubscription: Subscription;
  destinationsSubscription: Subscription;

  constructor(private router: Router, private route: ActivatedRoute, private airpotsService: AiportsService, private datePipe: DatePipe) { }

  departures: Airport[];
  destinations: Airport[];
  selectedDeparture: Airport;
  selectedDestination: Airport;

  showDepartures = false;
  showDestinations = false;
  departureSelected = false;
  typedDeparture = '';
  typedDestination = '';
  showDateArea = false;
  destinationSelected = false;
  departureDate: any;
  returnDate: any;

  ngOnInit() {
    this.onShowDepartures();
  }

  onShowDepartures() {
    this.departuresSubscription = this.airpotsService.getDepartures().subscribe(
      (departures: any) => {
        this.departures = departures
      },
      (error) => console.log(error)
    );
  }

  onShowDestinations(iataCode: string) {
    this.destinationsSubscription = this.airpotsService.getDestinations(iataCode).subscribe(
      (destinations: any) => {
        this.destinations = destinations;
      },
      (error) => console.log(error)
    );
  }

  formatDate(date: string, dateType: string) {
    if (dateType === 'start') {
      this.departureDate = this.datePipe.transform(date, 'yyyy-MM-dd')
    }
    if (dateType === 'end') {
      this.returnDate = this.datePipe.transform(date, 'yyyy-MM-dd')
    }
  }

  onLoadFlightsComponent() {
    this.router.navigate(['/flights/from/', this.selectedDeparture.iataCode, this.selectedDeparture.name, 'to', this.selectedDestination.iataCode,
      this.selectedDestination.name, 'flyOut', this.departureDate, 'flyBack', this.returnDate]);
  }

  ngOnDestroy() {
    this.departuresSubscription.unsubscribe();
    this.destinationsSubscription.unsubscribe();
  }
}