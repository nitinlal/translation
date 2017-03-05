import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Translate demo!';
  param = {
    'value': 'user'
  };

  constructor(private translateService: TranslateService) {
    translateService.setDefaultLang('en');
    translateService.use('es');
  }
}
