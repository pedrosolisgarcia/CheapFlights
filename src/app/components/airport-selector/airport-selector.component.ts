import { Component, Injectable, OnInit, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AiportsService } from '../../services/airports.service';

@Component({
  selector: 'app-airport-selector',
  templateUrl: './airport-selector.component.html',
  styleUrls: ['./airport-selector.component.css']
})
export class AirportSelectorComponent implements OnInit {

  constructor(private router: Router, private airpotsService: AiportsService) {}

  airports: any;
  selectedAirport = {
    iataCode: '',
    name: ''
  };
  destinations: any;
  selectedDestination = {
    iataCode: '',
    name: ''
  };
  showAirports = false;
  showDestinations = false;
  airportSelected = false;
  filteredAirport = '';
  filteredDestination = '';
  showDateArea = false;
  destinationSelected = false;
  startDate: any;
  endDate: any;
  datesSet = false;

  ngOnInit() {
   this.onShowAirports();
  }

  onShowAirports() {
    this.airpotsService.getAirports().subscribe(
      (airports: any) => {
        this.airports = airports
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
}