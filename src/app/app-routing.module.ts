import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { AirportSelectorComponent } from './components/airport-selector/airport-selector.component';
import { FlightListComponent } from './components/flight-list/flight-list.component';

const appRoutes: Routes = [
    { path: '', component: AirportSelectorComponent, children: [
        { path: 'flights/from/:departureIataCode/:departureAirportName/to/:destinationIataCode'+
        '/:destinationAirportName/flyOut/:departureDate/flyBack/:returnDate', 
        component: FlightListComponent }
      ]
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {onSameUrlNavigation: 'reload'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}