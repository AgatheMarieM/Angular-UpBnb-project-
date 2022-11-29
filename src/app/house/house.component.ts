import {Component, Input} from '@angular/core';
import {faHeart as faHeartSolid} from '@fortawesome/free-solid-svg-icons';
import {faHeart} from '@fortawesome/free-regular-svg-icons';
import {UpBnbService} from "../up-bnb.service";


@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss']
})
export class HouseComponent {
  faHeart = faHeart;
  faHeartSolid = faHeartSolid;

  constructor(public upBnbService: UpBnbService) {
  }

  @Input() id!: number;
  @Input() image!: string;
  @Input() city!: string;
  @Input() country!: string;
  @Input() host!: string;
  @Input() price!: number;
  @Input() stars?: number;
}
