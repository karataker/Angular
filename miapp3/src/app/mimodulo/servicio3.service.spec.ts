import { TestBed } from '@angular/core/testing';

import { Servicio3Service } from './servicio3.service';

describe('Servicio3Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Servicio3Service = TestBed.get(Servicio3Service);
    expect(service).toBeTruthy();
  });
});
