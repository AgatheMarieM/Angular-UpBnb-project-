import {Component} from '@angular/core';
import {UpBnbService} from "../up-bnb.service";
import {House, HousesData} from "../interfaces";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {

  houseResults?: House[] = [];

  constructor(private upBnbService: UpBnbService) {
  }

  getInput(event: any) {
    this.upBnbService.getSearchResult(event.target.value).subscribe((houses: HousesData) => {
        this.houseResults = houses.data;
      }
    )
  }
}

