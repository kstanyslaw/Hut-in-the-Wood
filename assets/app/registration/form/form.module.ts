import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormComponent } from './form.component';
import { MonthComponent } from './month/month.component';
import { TimepickerComponent } from './timepicker/timepicker.component';
import { TeammatesComponent } from './teammates/teammates.component';
import { AgepickerComponent } from './agepicker/agepicker.component';





@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    FormComponent,
    MonthComponent,
    TimepickerComponent,
    TeammatesComponent,
    AgepickerComponent
  ],
  exports: [
    FormComponent,
    MonthComponent,
    TimepickerComponent,
    TeammatesComponent,
    AgepickerComponent
  ]
})
export class FormModule { }
