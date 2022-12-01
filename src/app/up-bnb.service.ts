import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HouseDetails, HouseFeatures, HouseHost, HousePhotos, HouseReviews, HousesData} from "./interfaces";


const BASE_URL = "https://m9-frontend.upskill.appx.pt/upbnb";

@Injectable({
  providedIn: 'root'
})


export class UpBnbService {

  constructor(public http: HttpClient) {
  }

  getSearchResult(input: string) {
    return this.http.get<HousesData>(BASE_URL + "/casas?search=" + input);
  }

  getHouses() {
    return this.http.get<HousesData>(BASE_URL + "/casas");
  }

  //Managing favorites:
  favorites: number[] = JSON.parse(localStorage.getItem("favorites") || "[]"); //get favorites list or empty list

  isFavorite(id: number) {
    return this.favorites.includes(id);
  }

  toggleFavorite(id: number) {
    if (this.isFavorite(id)) {
      //remove id from fav (was in the list and user clicks again > removing)
      this.favorites.splice(this.favorites.indexOf(id), 1) //favorite was in the list, deleting it
    } else {
      this.favorites.push(id); //we push it into the list, wasn't fav yet
    }
    localStorage.setItem("favorites", JSON.stringify(this.favorites));//setting favorites item in the localStorage
  }

  getFavorites() {
    return this.favorites;
  }

  getFavoriteHouses() {
    return this.http.get<HousesData>(BASE_URL + "/casas?ids=" + this.favorites.join());
  }


  getDetails(id: number) {
    return this.http.get<HouseDetails>(BASE_URL + "/casas/" + id); //take off the  ":" from Postman
  }

  //HouseDetails is not a list! <HouseDetails[]> not needed, no "casting"!

  getFeatures(id: number) {
    return this.http.get<HouseFeatures>(BASE_URL + "/casas/" + id + "/features");
  }

  getHouseHost(id: number) {
    return this.http.get<HouseHost>(BASE_URL + "/casas/" + id + "/host");
  }

  getHousePhotos(id: number) {
    return this.http.get<HousePhotos>(BASE_URL + "/casas/" + id + "/photos");
  }

  getHouseReviews(id: number) {
    return this.http.get<HouseReviews>(BASE_URL + "/casas/" + id + "/reviews");
  }

  getCurrentBookings(){
    return this.http.get<HousesData>(BASE_URL + "/casas/current");
  }

  getPastBookings(){
    return this.http.get<HousesData>(BASE_URL + "/casas/past");
  }




}
