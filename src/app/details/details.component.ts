import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UpBnbService} from "../up-bnb.service";
import {HouseDetails} from "../interfaces";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {

  id_house: number;
  details?: HouseDetails //| null = null;


  constructor(private route: ActivatedRoute, public UpBnbService: UpBnbService) {
    this.id_house = route.snapshot.params['id_house']; //this.id: referencia à uma propriedade dele proprio
    //this.detalhes = livrariaService.getDetalhes(this.id);
  }




}
