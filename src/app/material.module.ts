import { NgModule } from '@angular/core';

import {
    MatNativeDateModule,
    MatDatepickerModule,
    MatAutocompleteModule,

    // MatCheckboxModule,
    // MatChipsModule,
    // MatDialogModule,
    // MatDividerModule,
    // MatExpansionModule,
    // MatGridListModule,
    // MatIconModule,
    MatInputModule,
    // MatListModule,
    // MatMenuModule,
    // MatPaginatorModule,
    // MatProgressBarModule,
    // MatProgressSpinnerModule,
    // MatRadioModule,
    // MatRippleModule,
    // MatSelectModule,
    // MatSidenavModule,
    // MatSliderModule,
    // MatSlideToggleModule,
    // MatSnackBarModule,
    // MatSortModule,
    // MatStepperModule,
    // MatTableModule,
    // MatTabsModule,
    // MatToolbarModule,
    // MatTooltipModule,
    // MatTreeModule,
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