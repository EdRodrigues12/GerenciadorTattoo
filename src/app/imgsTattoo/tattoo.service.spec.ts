import { TestBed } from '@angular/core/testing';

import { TattooService } from './tattoo.service';

describe('TattooService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TattooService = TestBed.get(TattooService);
    expect(service).toBeTruthy();
  });
});
