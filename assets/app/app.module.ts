import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import { NavigationComponent } from './navigation/navigation.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { AdvantagesComponent } from './advantages/advantages.component';
import { LocationComponent } from './location/location.component';
import { RegistrationComponent } from './registration/registration.component';

import {FormModule } from './registration/form/form.module';

@NgModule({
    declarations: [
      AppComponent,
      NavigationComponent,
      JumbotronComponent,
      AdvantagesComponent,
      LocationComponent,
      RegistrationComponent,
    ],
    imports: [
      BrowserModule,
      FormModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}
