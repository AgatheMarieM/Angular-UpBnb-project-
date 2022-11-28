import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HousesComponent} from "./houses/houses.component";
import {DetailsComponent} from "./details/details.component";
import {HouseComponent} from "./house/house.component";
import {WelcomeComponent} from "./welcome/welcome.component";
import {FavoritesComponent} from "./favorites/favorites.component";


const routes: Routes = [
  {path: '', redirectTo: '/welcome', pathMatch: 'full'}, //default path
  {path: 'houses', component: HousesComponent},
  {path: 'house', component: HouseComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'favorites', component: FavoritesComponent},
  {path: 'details/:id', component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
