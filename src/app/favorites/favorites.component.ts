import { Component } from '@angular/core';
import {UpBnbService} from "../up-bnb.service";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent {
  constructor(private upBnbService: UpBnbService) {
  }
}
