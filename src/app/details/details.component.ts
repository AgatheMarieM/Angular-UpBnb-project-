import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UpBnbService} from "../up-bnb.service";
import {HouseDetails, HouseFeatures, Features} from "../interfaces";

@Component({
  selector: 'app-details',

  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {

  id: number;
  details?: HouseDetails;
  features?: Features[] = [];


  constructor(private route: ActivatedRoute, public UpBnbService: UpBnbService) {
    this.id = route.snapshot.params['id']; //this.id: referencia à uma propriedade dele proprio
  }

  ngOnInit(): void {
    this.UpBnbService.getDetails(this.id).subscribe((details) => {
        this.details = details;
      }
    )
    this.UpBnbService.getFeatures(this.id).subscribe((features: HouseFeatures) => {
        this.features = features.features;
        console.log(this.features);
      }
    )
  }


}
