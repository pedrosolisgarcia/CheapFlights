import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { DateSelectorComponent } from './components/date-selector/date-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    DateSelectorComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
