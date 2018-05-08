import { Component, Injectable, OnInit, NgModule } from '@angular/core';
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
export class AirportSelectorComponent implements OnInit {

  navigationSubscription: Subscription;

  constructor(private router: Router, private route: ActivatedRoute, private airpotsService: AiportsService, private datePipe: DatePipe) {}

  departures: Airport[];
  destinations: Airport[];
  selectedDeparture: Airport;
  selectedDestination: Airport;
  
  showDepartures = false;
  showDestinations = false;
  departureSelected = false;
  filteredAirport = '';
  filteredDestination = '';
  showDateArea = false;
  destinationSelected = false;
  startDate: any;
  endDate: any;

  ngOnInit() {
   this.onShowDepartures();
  }

  onShowDepartures() {
    this.airpotsService.getDepartures().subscribe(
      (departures: any) => {
        this.departures = departures
      },
      (error) => console.log(error)
    );
  }

  onShowDestinations(iataCode: string) {
    this.airpotsService.getDestinations(iataCode).subscribe(
      (destinations: any) => {
        this.destinations = destinations;
      },
      (error) => console.log(error)
    );
  }

  onLoadFlightList() {
    this.router.navigate(['/flights']);
  }

  formatDate(date: string, dateType: string) {
    if (dateType === 'start') {
      this.startDate = this.datePipe.transform(date, 'yyyy-MM-dd')
    }
    if (dateType === 'end') {
      this.endDate = this.datePipe.transform(date, 'yyyy-MM-dd')
    } 
  }

  onLoadFlightsComponent() {
    this.router.navigate(['/flights/', this.selectedDeparture.iataCode, this.selectedDeparture.name, this.selectedDestination.iataCode,
     this.selectedDestination.name, this.startDate,this.endDate]);
  }
}