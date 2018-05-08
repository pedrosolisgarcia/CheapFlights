import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DatePipe } from '@angular/common';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { AiportsService } from './services/airports.service';
import { CheapFlightService } from './services/cheapflights.service';
import { AirportSelectorComponent } from './components/airport-selector/airport-selector.component';
import { FlightListComponent } from './components/flight-list/flight-list.component';
import { FilterAirportPipe } from './filter-airport.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AirportSelectorComponent,
    FilterAirportPipe,
    FlightListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    NoopAnimationsModule
  ],
  providers: [AiportsService, CheapFlightService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
