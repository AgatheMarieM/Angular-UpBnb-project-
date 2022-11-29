import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HouseDetails, HouseFeatures, HouseHost, HousePhotos, HouseReviews, HousesData} from "./interfaces";


const BASE_URL = "https://m9-frontend.upskill.appx.pt/upbnb";

@Injectable({
  providedIn: 'root'
})


export class UpBnbService {

  constructor(public http: HttpClient) {}

  getSearchResult(input: string){
    return this.http.get<HousesData>(BASE_URL + "/casas?search=" + input);
  }

  getHouses(){
    return this.http.get<HousesData>(BASE_URL + "/casas");
  }

  getDetails(id: number){
    return this.http.get<HouseDetails>(BASE_URL + "/casas/" + id ); //take off the  ":" that appear on Postman
  }
  //HouseDetails is not a list! <HouseDetails[]> not needed, no "casting"!

  getFeatures(id: number){
    return this.http.get<HouseFeatures>(BASE_URL + "/casas/" + id + "/features");
  }

  getHouseHost(id: number){
    return this.http.get<HouseHost>(BASE_URL + "/casas/" + id + "/host");
  }

  getHousePhotos(id: number){
    return this.http.get<HousePhotos>(BASE_URL + "/casas/" + id + "/photos");
  }

  getHouseReviews(id: number){
    return this.http.get<HouseReviews>(BASE_URL + "/casas/" + id + "/reviews");
  }

}
