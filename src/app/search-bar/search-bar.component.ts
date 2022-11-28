import {Component} from '@angular/core';
import {UpBnbService} from "../up-bnb.service";
import {House, HousesData} from "../interfaces";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {

  // country?: string;
  houses?: House[] = [];
  input?: string = document.querySelector('#countryInput').nodeValue;
  getInput(){
    return this.input;
  }

  constructor(private upBnbService: UpBnbService) {
  }

/*  ngOnInit(): void {
    this.upBnbService.getSearchResult(this.country).subscribe((houses: HousesData) => {
        this.houses = houses.data;
      }
    )
  }*/

}
