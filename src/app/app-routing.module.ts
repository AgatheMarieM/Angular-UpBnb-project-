import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HousesComponent} from "./houses/houses.component";
import {DetailsComponent} from "./details/details.component";


const routes: Routes = [
  {path: '', redirectTo: '/houses', pathMatch: 'full'}, //default path
  {path: 'houses', component: HousesComponent},
  {path: 'details/:id_house', component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
