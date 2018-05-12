import { NgModule } from '@angular/core';

import {
    MatNativeDateModule,
    MatDatepickerModule,
    MatAutocompleteModule,
    MatInputModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatNativeDateModule,
    MatDatepickerModule,
    MatInputModule,
  ],
  exports: [
    MatNativeDateModule,
    MatDatepickerModule,
    MatInputModule,
  ]
})
export class MaterialModule {}