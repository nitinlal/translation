import {Component} from '@angular/core';
@Component({
  selector: 'home-child',
  templateUrl: './home.component.html'
})

export class HomeComponent {
  param = {
    'value': 'Home Component!'
  };
}