import { TestBed } from '@angular/core/testing';

import { NgFlashService } from './ng-flash.service';

describe('NgFlashService', () => {
  let service: NgFlashService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgFlashService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
