import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {} from './home.component';
import {HomeComponent} from './home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Translate demo!';
  param = {
    'value': 'App component'
  };

  constructor(private translateService: TranslateService) {
    translateService.setDefaultLang('en');
    translateService.use('es');
  }
}
