import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HouseComponent } from './house/house.component';
import { HousesComponent } from './houses/houses.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HouseComponent,
    HousesComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
