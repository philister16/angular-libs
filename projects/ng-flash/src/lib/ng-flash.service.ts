import {
  Injectable,
  ComponentFactoryResolver,
  ApplicationRef,
  Injector,
  EmbeddedViewRef,
} from '@angular/core';

import { NgFlashModule } from './ng-flash.module';
import { NgFlashComponent } from './ng-flash.component';
import { NgFlashConfig } from './ng-flash-config.interface';
import { NgFlashRef } from './ng-flash-ref';

@Injectable({
  providedIn: NgFlashModule
})
export class NgFlashService {
  private flashComponentRef: NgFlashRef;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) { }

  private appendFlashToBody(message: string, type: string, init: NgFlashConfig) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(NgFlashComponent);
    const componentRef: NgFlashRef = componentFactory.create(this.injector);
    componentRef.instance.message = message;
    componentRef.instance.type = type;
    componentRef.instance.init = init;
    componentRef.instance.dismiss = this.close;
    componentRef.instance.self$ = componentRef;
    this.appRef.attachView(componentRef.hostView);
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);
    this.flashComponentRef = componentRef;
  }

  private removeFlashFromBody() {
    this.appRef.detachView(this.flashComponentRef.hostView);
    this.flashComponentRef.destroy();
  }

  private open(message: string, type: 'info' | 'warning' | 'danger' | 'success' = 'info', config?: NgFlashConfig): NgFlashRef {
    let init: NgFlashConfig = {
      vertical: 'top',
      horizontal: 'right',
      delay: 3000
    };
    if (config) {
      init = { ...init, ...config };
    }
    this.appendFlashToBody(message, type, init);
    if (init.delay !== 'none') {
      setTimeout(() => {
        this.removeFlashFromBody();
      }, init.delay);
    }
    return this.flashComponentRef;
  }

  /**
   * Flashes a success message.
   * @param message A message to be displayed to the user.
   * @param config A FlashConfig object
   */
  public success(message: string, config?: NgFlashConfig): NgFlashRef {
    return this.open(message, 'success', config);
  }

  /**
   * Flashes an error message.
   * @param message A message to be displayed to the user.
   * @param config A FlashConfig object
   */
  public danger(message: string, config?: NgFlashConfig): NgFlashRef {
    return this.open(message, 'danger', config);
  }

  /**
   * Flashes a warning message.
   * @param message A message to be displayed to the user.
   * @param config A `FlashConfig` object.
   */
  public warning(message: string, config?: NgFlashConfig): NgFlashRef {
    return this.open(message, 'warning', config);
  }

  /**
   * Flashes a generic info message.
   * @param message A message to be displayed to the user.
   * @param config A `FlashConfig` object.
   */
  public info(message: string, config?: NgFlashConfig): NgFlashRef {
    return this.open(message, 'info', config);
  }

  /**
   * Closes an open flash message.
   */
  public close(): void {
    this.removeFlashFromBody();
  }
}

