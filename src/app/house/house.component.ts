import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss']
})
export class HouseComponent {
  @Input() image!: string;
  @Input() city!: string;
  @Input() country!: string;
  @Input() host!: string;
  @Input() price!: number;
  @Input() stars?: number;
}
