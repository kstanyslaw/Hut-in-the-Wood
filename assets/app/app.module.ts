import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import { NavigationComponent } from './navigation/navigation.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { AdvantagesComponent } from './advantages/advantages.component';
import { LocationComponent } from './location/location.component';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
    declarations: [
      AppComponent,
      NavigationComponent,
      JumbotronComponent,
      AdvantagesComponent,
      LocationComponent,
      RegistrationComponent,
    ],
    imports: [BrowserModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}
