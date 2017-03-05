import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule, Http} from '@angular/http';

import {AppComponent} from './app.component';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {} from '@ngx-translate/http-loader';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

export function httpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TranslateModule.forRoot(
      {
        loader: TranslateLoader,
        useFactory: httpLoaderFactory,
        dep: [Http]
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
