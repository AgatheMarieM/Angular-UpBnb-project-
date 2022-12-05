import {Component} from '@angular/core';
import {UpBnbService} from "../up-bnb.service";
import {House, HousesData} from "../interfaces";
import {faHeart as faHeartSolid, faStar} from '@fortawesome/free-solid-svg-icons';
import {faHeart} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent {
  faHeart = faHeart;
  faHeartSolid = faHeartSolid;
  faStar = faStar;
  noite?: string = "noite";
  anfitriao?: string = "Anfitrião";


  constructor(public upBnbService: UpBnbService) {
  }

  favHouses?: House[] = []; //use interface house, empty array at first
  favHousesByCountry: {
    [key: string]: House[]
  } = {};


  ngOnInit(): void {
    //get houses with these ids
    this.upBnbService.getFavoriteHouses().subscribe((houses: HousesData) => {
      this.favHouses = houses.data; //the object is a list of houses


      this.favHouses.forEach((favHouse) => {
          if (this.favHousesByCountry) {
            if (!this.favHousesByCountry[favHouse.country]) {
              this.favHousesByCountry[favHouse.country] = [];
            }
            this.favHousesByCountry[favHouse.country].push(favHouse)
          }
        }
      )
    })
  }
   getObject() {
    return Object.keys(this.favHousesByCountry);
  }

}
