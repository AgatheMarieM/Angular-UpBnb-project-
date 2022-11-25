import {Component} from '@angular/core';
import {UpBnbService} from "../up-bnb.service";
import {House, HousesData} from "../interfaces";

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.scss']
})

export class HousesComponent {
  constructor(private upBnbService: UpBnbService) {
  }

  houses?: House[] = []; //list of houses is at first an empty list

  ngOnInit(): void {
    this.upBnbService.getHouses().subscribe((houses: HousesData) => {
      this.houses = houses.data; //the object is a list of houses
      console.log(this.houses);
    })


  }
}
