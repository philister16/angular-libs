import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgFlashModule } from 'ng-flash';
import { NgLoadingButtonModule } from 'projects/ng-loading-button/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgFlashModule,
    NgLoadingButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
