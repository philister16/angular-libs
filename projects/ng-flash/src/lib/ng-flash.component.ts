import { Component, HostListener, ApplicationRef, ComponentRef } from '@angular/core';
import { NgFlashConfig } from './ng-flash-config.interface';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'lib-ng-flash',
  template: `
    <div [@fadeInOut]
        class="fl-wrapper fl-type-{{ type }} fl-vertical-{{ init.vertical }} fl-horizontal-{{ init.horizontal }}">
        <div class="fl-inner">
            <span class="fl-text">{{ message }}</span>
        </div>
    </div>
  `,
  styleUrls: ['./flash.component.scss'],
  animations: [
    trigger(
      'fadeInOut',
      [
        transition(
          ':enter',
          [
            style({ opacity: 0 }),
            animate('0.2s ease-out',
              style({ opacity: 1 }))
          ]
        )
      ]
    )
  ]
})
export class NgFlashComponent {
  message: string;
  type: string;
  init: NgFlashConfig;
  dismiss: any;
  self$: ComponentRef<NgFlashComponent>;

  constructor(private appref: ApplicationRef) { }

  @HostListener('click') remove() {
    this.appref.detachView(this.self$.hostView);
    this.self$.destroy();
  }

}
