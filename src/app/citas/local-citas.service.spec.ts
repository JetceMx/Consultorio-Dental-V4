import { TestBed } from '@angular/core/testing';

import { LocalCitasService } from './local-citas.service';

describe('LocalCitasService', () => {
  let service: LocalCitasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalCitasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
