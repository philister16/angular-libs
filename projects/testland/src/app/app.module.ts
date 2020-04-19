import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgFlashModule } from 'ng-flash';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgFlashModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
