import { TestBed } from '@angular/core/testing';

import { MonSuperService } from './mon-super.service';

describe('MonSuperService', () => {
  let service: MonSuperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonSuperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
