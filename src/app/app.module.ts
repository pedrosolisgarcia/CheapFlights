import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DateSelectorComponent } from './components/date-selector/date-selector.component';
import { DateWrapperComponent } from './components/date-wrapper/date-wrapper.component';
import { AiportsService } from './services/airports.service';
import { CheapFlightService } from './services/cheapflights.service';
import { AirportSelectorComponent } from './components/airport-selector/airport-selector.component';
import { FilterPipe } from './filter.pipe';
import { FlightListComponent } from './components/flight-list/flight-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DateSelectorComponent,
    DateWrapperComponent,
    AirportSelectorComponent,
    FilterPipe,
    FlightListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AiportsService, CheapFlightService],
  bootstrap: [AppComponent]
})
export class AppModule { }
