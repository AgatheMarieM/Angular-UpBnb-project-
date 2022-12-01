import {Component} from '@angular/core';
import {UpBnbService} from "../up-bnb.service";
import {House, HousesData} from "../interfaces";


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent {

  constructor(public upBnbService: UpBnbService) {
  }

  favHouses?: House[] = []; //use interface house, empty array at first
  favHousesByCountry?: {
    [index: string]: House[]
  } = {};

  // keysArray?: string[] = [];


  ngOnInit(): void {
    //get houses with these ids
    this.upBnbService.getFavoriteHouses().subscribe((houses: HousesData) => {
      this.favHouses = houses.data; //the object is a list of houses


      this.favHouses.forEach((favHouse) => {
          if (this.favHousesByCountry) {
            if (!this.favHousesByCountry[favHouse.country]) {
              this.favHousesByCountry[favHouse.country] = [];
              this.favHousesByCountry[favHouse.country].push(favHouse)
            } else {
              this.favHousesByCountry[favHouse.country].push(favHouse)
            }
          }
        }
      )
      console.log(this.favHousesByCountry);
      //@ts-ignore

/*
      console.log(Object.keys(this.favHousesByCountry));
*/
    })

  }
}
