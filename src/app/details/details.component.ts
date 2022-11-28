import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UpBnbService} from "../up-bnb.service";
import {HouseDetails, HouseFeatures, HouseHost, HousePhotos} from "../interfaces";
import {faDog} from '@fortawesome/free-solid-svg-icons';
import {faAirFreshener} from '@fortawesome/free-solid-svg-icons';
import {faWifi} from '@fortawesome/free-solid-svg-icons';
import {faTv} from "@fortawesome/free-solid-svg-icons/faTv";
import {faSmoking} from '@fortawesome/free-solid-svg-icons';

/*import {faWashingMachine} from '@fortawesome/free-solid-svg-icons';
import {faFireplace} from '@fortawesome/free-solid-svg-icons';
import {faMicrowave} from '@fortawesome/free-solid-svg-icons';*/


@Component({
  selector: 'app-details',

  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  faDog = faDog;
  faAirFreshener = faAirFreshener;
  faTv = faTv;
  faSmoking = faSmoking;
  faWifi = faWifi;
  /*
    faWashingMachine = faWashingMachine;
    faFireplace = faFireplace;
    faMicrowave = faMicrowave;
  */


  id: number;
  details?: HouseDetails;
  features?: string[] = [];
  host?: HouseHost;
  photos?: string[] = [];


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
      }
    )
    this.UpBnbService.getHouseHost(this.id).subscribe((host) => {
        this.host = host;
        console.log(this.host);
      }
    )

    this.UpBnbService.getHousePhotos(this.id).subscribe((photos: HousePhotos) => {
      this.photos = photos.photos;
    })

  }


}
