import { TestBed } from '@angular/core/testing';

import { DataglobalService } from './dataglobal.service';

describe('DataglobalService', () => {
  let service: DataglobalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataglobalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
