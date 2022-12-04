import {Component, Input} from '@angular/core';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {UpBnbService} from "../up-bnb.service";

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.scss']
})
export class PersonCardComponent {
  faStar = faStar;

  constructor(public upBnbService: UpBnbService) {
  }

  @Input() photo!: string;
  @Input() name!: string;
  @Input() subtitle!: number | string;
  @Input() text?: string;
}
