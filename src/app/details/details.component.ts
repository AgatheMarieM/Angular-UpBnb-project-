import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UpBnbService} from "../up-bnb.service";
import {HouseDetails, HouseFeatures, HouseHost, HousePhotos, HouseReviews} from "../interfaces";
import {
  faHeart as faHeartSolid,
  faStar,
  faDog,
  faAirFreshener,
  faWifi,
  faTv,
  faSmoking,
  faKitchenSet,
  faSink,
  faFire
} from '@fortawesome/free-solid-svg-icons';
import {faHeart} from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})

export class DetailsComponent {
  faStar = faStar
  faHeart = faHeart;
  faHeartSolid = faHeartSolid;
  faDog = faDog;
  faAirFreshener = faAirFreshener;
  faTv = faTv;
  faSmoking = faSmoking;
  faWifi = faWifi;
  faKitchenSet = faKitchenSet;

  icons?: any = {
    smokingAllowed: faSmoking,
    washingMachine: faSink,
    airConditioner: faAirFreshener,
    fireplace: faFire,
    tv: faTv,
    petsAllowed: faDog,
    wifi: faWifi,
    microwave: faKitchenSet
  }

  id: number;
  details?: HouseDetails;
  features?: string[] = [];
  host?: HouseHost;
  photos?: string[] = [];
  reviews?: HouseReviews;

  activeFeatures: string[] = [];
  inactiveFeatures: string[] = [];
  activeFeatureClass?: string = "active";

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
        let allFeatures = Object.keys(this.icons);
        for (let i = 0; i < allFeatures.length; i++) {
          if (this.features.includes(allFeatures[i])) {
            this.activeFeatures.push(allFeatures[i]);
          } else {
            this.inactiveFeatures.push(allFeatures[i]);
          }
        }
      }
    );

    this.UpBnbService.getHouseHost(this.id).subscribe((host) => {
        this.host = host;
      }
    )

    this.UpBnbService.getHousePhotos(this.id).subscribe((photos: HousePhotos) => {
      this.photos = photos.photos;
    })

    this.UpBnbService.getHouseReviews(this.id).subscribe((reviews) => {
      this.reviews = reviews;
    })

  }


}
