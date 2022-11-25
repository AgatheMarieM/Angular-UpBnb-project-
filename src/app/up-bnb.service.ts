import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HousesData} from "./interfaces";

const BASE_URL = "https://m9-frontend.upskill.appx.pt/upbnb";

@Injectable({
  providedIn: 'root'
})


export class UpBnbService {

  constructor(public http: HttpClient) {}

  getHouses(){
    return this.http.get<HousesData>(BASE_URL + "/casas");
  }
}
