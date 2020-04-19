# NgFlash

A simple library to display flash messages (also called "snackbars" for example by the Angular Material library).

[Gif Example](./example.gif)

There are plenty of notification libraries out there. The goal of this one is to be as barebones as possible and do everything the "Angular way". It is different from most other Angular notification libraries as it doesn't need you to place a component somewhere in your templates. Instead you can just launch flash messages from a single service that will dynamically add the necessary component to the app and remove it again. It mirrors the approach of the Angular Material library for its snackbar or dialog components but follows bootstrap's design esthetics.

## Usage

Install the library via NPM into your Angular project.

```
npm install --save ng-flash
```

Then to use the library import the module and service.

```typescript
// In the module where you want to use the library
import { NgFlashModule } from 'ng-flash';

// In the component from where you want to launch a flash message
import { Component } from '@angular/core';
import { NgFlashService } from 'ng-flash';

@Component({
  selector: 'app-my-component',
  template: `
    <h1>My Component</h1>
    <button (click)="showSuccessFlashMessage()">Show success message</button>
    `
})
export class MyComponent {

  constructor(private flash: NgFlashService) { }

  showSuccessFlashMessage() {
    this.flash.success('Yay it works!');
  }
}
```

The `NgFlashService` exposes 4 separate methods depending on the type of message you intend to show to the user: `success`, `warning`, `danger` and `info` modelled after bootstrap css frameworks specs.

## Configuration

The service's methods accept an optional second argument which is a configuration object to alter the display position of the flash messages. For convenience you can import the `NgFlashConfig` interface.

```typescript
// ...

import { NgFlashService, NgFlashConfig } from 'ng-flash';

// ...

  showSuccessFlashMessage() {
    // show the message at the bottom center and keep it in view for 6s
    const config: NgFlashConfig = {
    horizontal: 'center',
    vertical: 'bottom',
    delay: 6000
  };
    this.flash.success('Yay it works!', config);
  }
  ```

## API

### NgFlashService (service class)

#### Methods

Method | Arguments
------ | ---------
success() | message: string, [config: NgFlashConfig] _optional_
danger() | message: string, [config: NgFlashConfig] _optional_
warning() | message: string, [config: NgFlashConfig] _optional_
info() | message: string, [config: NgFlashConfig] _optional_

### NgFlashConfig (interface)

Property | Values
-------- | ------
horizontal | 'top' _default_, 'bottom'
vertical | 'right' _default_, 'center', 'left'
delay | 3000 _default_, 'none'

## Compatibility

Other than Angular there are no dependencies. The library was built with the ViewEngine and should be backwards compatible with Angular < V9.

## License

Copyright 2020 philister16

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
