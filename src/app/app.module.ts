import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HouseComponent } from './house/house.component';
import { HousesComponent } from './houses/houses.component';
import { AppRoutingModule } from './app-routing.module';
import { DetailsComponent } from './details/details.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { PersonCardComponent } from './person-card/person-card.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HouseComponent,
    HousesComponent,
    DetailsComponent,
    WelcomeComponent,
    FavoritesComponent,
    PersonCardComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FontAwesomeModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
