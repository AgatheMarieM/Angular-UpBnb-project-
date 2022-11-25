import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

const BASE_URL = "https://m9-frontend.upskill.appx.pt/upbnb";

export class UpBnbService {

  constructor(private http: HttpClient) {}

  getHouses(){
    return this.http.get(BASE_URL + "/casas?page=1&limit=8");
  }
}
