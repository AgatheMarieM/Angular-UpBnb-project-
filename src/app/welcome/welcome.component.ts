import {Component} from '@angular/core';
import {UpBnbService} from "../up-bnb.service";
import {House, HousesData} from "../interfaces";
import {faHeart as faHeartSolid} from '@fortawesome/free-solid-svg-icons';
import {faHeart} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
  faHeart = faHeart;
  faHeartSolid = faHeartSolid;
  currentBookings?: House[] = [];

  constructor(public upBnbService: UpBnbService) {
  }


  ngOnInit(): void {
    this.upBnbService.getCurrentBookings().subscribe((houses: HousesData) => {
      this.currentBookings = houses.data;
    })
  }
}
