import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'lib-ng-loading-button',
  template: `
    <button #btn class="primary" [style.width]="dimensions?.width + 'px'" [style.height]="dimensions?.height + 'px'">
<span *ngIf="!loader" class="text">
  <ng-content></ng-content>
</span>
      <svg *ngIf="loader" viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg" fill="#fff">
        <circle cx="15" cy="15" r="15">
            <animate attributeName="r" from="15" to="15"
                    begin="0s" dur="0.8s"
                    values="15;9;15" calcMode="linear"
                    repeatCount="indefinite" />
            <animate attributeName="fill-opacity" from="1" to="1"
                    begin="0s" dur="0.8s"
                    values="1;.5;1" calcMode="linear"
                    repeatCount="indefinite" />
        </circle>
        <circle cx="60" cy="15" r="9" fill-opacity="0.3">
            <animate attributeName="r" from="9" to="9"
                    begin="0s" dur="0.8s"
                    values="9;15;9" calcMode="linear"
                    repeatCount="indefinite" />
            <animate attributeName="fill-opacity" from="0.5" to="0.5"
                    begin="0s" dur="0.8s"
                    values=".5;1;.5" calcMode="linear"
                    repeatCount="indefinite" />
        </circle>
        <circle cx="105" cy="15" r="15">
            <animate attributeName="r" from="15" to="15"
                    begin="0s" dur="0.8s"
                    values="15;9;15" calcMode="linear"
                    repeatCount="indefinite" />
            <animate attributeName="fill-opacity" from="1" to="1"
                    begin="0s" dur="0.8s"
                    values="1;.5;1" calcMode="linear"
                    repeatCount="indefinite" />
        </circle>
      </svg>
    </button>
  `,
  styleUrls: ['./ng-loading-button.component.scss']
})
export class NgLoadingButtonComponent implements OnInit, AfterViewInit, OnChanges {
  @ViewChild('btn') btn: ElementRef;
  @Input() loader = false;
  dimensions: { width: number, height: number };

  constructor() { }

  ngOnInit(): void {
    // const { offsetWidth, offsetHeight } = this.btn.nativeElement;
    // this.dimensions = { width: offsetWidth, height: offsetHeight };
    // console.log(this.dimensions);
  }

  ngAfterViewInit(): void {
    // const { offsetWidth, offsetHeight } = this.btn.nativeElement;
    // this.dimensions = { width: offsetWidth, height: offsetHeight };
    // console.log(this.dimensions);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.loader.currentValue) {
      const { offsetWidth, offsetHeight } = this.btn.nativeElement;
      this.dimensions = { width: offsetWidth, height: offsetHeight };
      console.log(this.dimensions);
    }
  }

}
