import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgFlashComponent } from './ng-flash.component';

describe('NgFlashComponent', () => {
  let component: NgFlashComponent;
  let fixture: ComponentFixture<NgFlashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgFlashComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgFlashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
