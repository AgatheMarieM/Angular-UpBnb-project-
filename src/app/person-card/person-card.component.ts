import {Component, Input} from '@angular/core';
import {faStar} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.scss']
})
export class PersonCardComponent {
  faStar = faStar;
  @Input() photo!: string;
  @Input() name!: string;
  @Input() rating?: number;
  @Input() text?: string;
  @Input() date?: string;
}
