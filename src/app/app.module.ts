import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DateSelectorComponent } from './components/date-selector/date-selector.component';
import { DateWrapperComponent } from './components/date-wrapper/date-wrapper.component';
import { AiportsService } from './services/airports.service';

@NgModule({
  declarations: [
    AppComponent,
    DateSelectorComponent,
    DateWrapperComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [AiportsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
