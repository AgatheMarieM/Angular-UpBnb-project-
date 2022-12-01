import {Component} from '@angular/core';
import {UpBnbService} from "../up-bnb.service";
import {House, HousesData} from "../interfaces";
import {faHeart as faHeartSolid} from '@fortawesome/free-solid-svg-icons';
import {faHeart} from '@fortawesome/free-regular-svg-icons';
import {faStar} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
  faHeart = faHeart;
  faHeartSolid = faHeartSolid;
  faStar = faStar;
  currentBookings?: House[] = [];
  pastBookings?: House[] = [];

  constructor(public upBnbService: UpBnbService) {
  }


  ngOnInit(): void {
    this.upBnbService.getCurrentBookings().subscribe((houses: HousesData) => {
      this.currentBookings = houses.data;
    })

    this.upBnbService.getPastBookings().subscribe((houses: HousesData) => {
      this.pastBookings = houses.data;
    })
  }
}
