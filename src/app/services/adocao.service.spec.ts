import { TestBed } from '@angular/core/testing';

import { AdocaoService } from './adocao.service';

describe('DetalhesService', () => {
  let service: AdocaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdocaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
