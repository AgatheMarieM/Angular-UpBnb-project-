import {Component, OnInit} from '@angular/core';
import {UpBnbService} from "../up-bnb.service";
import {House, HousesData} from "../interfaces";

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.scss']
})

export class HousesComponent implements OnInit {
  constructor(private upBnbService: UpBnbService) {
  }

  input: string = '';
  i: number = 1; //refers to page number
  houses: House[] = []; //list of houses is at first an empty list

  ngOnInit(): void {
    this.getResults()
  }

  getInput(value: string) {
    this.i = 1;
    this.input = value;
    this.getResults()
  }

  getMoreResults() {
    this.i++;
    this.getResults();
  }

  getResults() {
    this.upBnbService.getSearchResult(this.input, this.i).subscribe((houses: HousesData) => {
      if (this.input == '') {
        this.houses = houses.data;
      } else if (this.input != '') {
        if (this.i > 1) {
          this.houses.push(...houses.data);
        } else {
          this.houses = [];
          this.houses.push(...houses.data);
        }
      }
    })
  }
  //on initialization, input is '' and i = 1, API sends 8 first houses and populate empty array this.houses
  //getInput(): receives input from user, sets this.houses to empty array again, and pushes fresh results into this.houses
  //getMoreResults() increments i, pushes more results from the same input into this.houses array
}
