import { Component, Injectable, OnInit, NgModule } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { AiportsService } from '../../services/airports.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-airport-selector',
  templateUrl: './airport-selector.component.html',
  styleUrls: ['./airport-selector.component.css']
})
export class AirportSelectorComponent implements OnInit {

  navigationSubscription: Subscription;

  constructor(private router: Router, private route: ActivatedRoute, private airpotsService: AiportsService, private datePipe: DatePipe) {}

  departures: any;
  selectedDeparture = {
    iataCode: '',
    name: ''
  };
  destinations: any;
  selectedDestination = {
    iataCode: '',
    name: ''
  };
  showDepartures = false;
  showDestinations = false;
  departureSelected = false;
  filteredAirport = '';
  filteredDestination = '';
  showDateArea = false;
  destinationSelected = false;
  startDate: any;
  endDate: any;

  minDate = new Date(2018, 5, 5);
  maxDate = new Date(2018, 5, 20);

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
        console.log(this.destinations);
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
      console.log(this.startDate);
    }
    if (dateType === 'end') {
      this.endDate = this.datePipe.transform(date, 'yyyy-MM-dd')
      console.log(this.endDate);
    } 
  }

  onLoadFlightsComponent() {
    this.router.navigate(['/flights/', this.selectedDeparture.iataCode, this.selectedDeparture.name, this.selectedDestination.iataCode,
     this.selectedDestination.name, this.startDate,this.endDate]);
  }
}