import { Component } from '@angular/core';
import { NgFlashService, NgFlashConfig } from 'ng-flash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testland';
  init: NgFlashConfig = {
    horizontal: 'center',
    vertical: 'bottom',
    delay: 6000
  };

  constructor(private flash: NgFlashService) { }

  launch() {
    this.flash.success('Yay it worked!');
  }
}
