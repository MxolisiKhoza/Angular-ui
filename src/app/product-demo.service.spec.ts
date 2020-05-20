import { TestBed } from '@angular/core/testing';

import { ProductDemoService } from './product-demo.service';

describe('ProductDemoService', () => {
  let service: ProductDemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductDemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
