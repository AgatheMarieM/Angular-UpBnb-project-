import {Component} from '@angular/core';
import {House, HousesData} from "../interfaces";
import {UpBnbService} from "../up-bnb.service";

@Component({
  selector: 'app-more-results',
  templateUrl: './more-results.component.html',
  styleUrls: ['./more-results.component.scss']
})
export class MoreResultsComponent {

  houseResults?: House[] = [];

  constructor(private upBnbService: UpBnbService) {
  }

  getMoreResults(event: any) {
    this.upBnbService.getSearchResult(event.target.value).subscribe((houses: HousesData) => {
        this.houseResults = houses.data;
      }
    )
  }
}
