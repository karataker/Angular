import { TestBed } from '@angular/core/testing';

import { MiservicioService } from './miservicio.service';

describe('MiservicioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MiservicioService = TestBed.get(MiservicioService);
    expect(service).toBeTruthy();
  });
});
