import { TestBed } from '@angular/core/testing';

import { Servicio2Service } from './servicio2.service';

describe('Servicio2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Servicio2Service = TestBed.get(Servicio2Service);
    expect(service).toBeTruthy();
  });
});
