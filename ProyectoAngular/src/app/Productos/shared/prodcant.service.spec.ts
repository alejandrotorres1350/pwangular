import { TestBed } from '@angular/core/testing';

import { ProdcantService } from './prodcant.service';

describe('ProdcantService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProdcantService = TestBed.get(ProdcantService);
    expect(service).toBeTruthy();
  });
});
