import { TestBed } from '@angular/core/testing';

import { UpBnbService } from './up-bnb.service';

describe('UpBnbService', () => {
  let service: UpBnbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpBnbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
