import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HousesComponent} from "./houses/houses.component";
import {DetailsComponent} from "./details/details.component";
import {HouseComponent} from "./house/house.component";


const routes: Routes = [
  {path: '', redirectTo: '/houses', pathMatch: 'full'}, //default path
  {path: 'houses', component: HousesComponent},
  {path: 'house', component: HouseComponent},
  {path: 'details/:id', component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
