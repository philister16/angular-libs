import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgFlashComponent } from './ng-flash.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [NgFlashComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  exports: [NgFlashComponent]
})
export class NgFlashModule { }
