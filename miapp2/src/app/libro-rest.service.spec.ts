import { TestBed } from '@angular/core/testing';

import { LibroRESTService } from './libro-rest.service';

describe('LibroRESTService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibroRESTService = TestBed.get(LibroRESTService);
    expect(service).toBeTruthy();
  });
});
