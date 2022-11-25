import { Component } from '@angular/core';
import {UpBnbService} from "../up-bnb.service";
import {House} from "../interfaces";

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.scss']
})
export class HousesComponent {
  constructor(private upBnb: UpBnbService ) {
  }

 houses?: House[];


}
