import { TestBed } from '@angular/core/testing';

import { Datos1Service } from './datos1.service';

describe('Datos1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Datos1Service = TestBed.get(Datos1Service);
    expect(service).toBeTruthy();
  });
});
