import { TestBed } from '@angular/core/testing';

import { RestaurantsService } from './restaurants.service';

describe('RestaurantsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestaurantsService = TestBed.get(RestaurantsService);
    expect(service).toBeTruthy();
  });
});
