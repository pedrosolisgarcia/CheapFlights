import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { DateSelectorComponent } from './components/date-selector/date-selector.component';
import { DateWrapperComponent } from './components/date-wrapper/date-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    DateSelectorComponent,
    DateWrapperComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
