import { Component } from '@angular/core';
import {UpBnbService} from "../up-bnb.service";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
  constructor(private upBnbService: UpBnbService) {
  }
}
