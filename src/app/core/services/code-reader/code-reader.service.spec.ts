import { TestBed } from '@angular/core/testing';

import { CodeReaderService } from './code-reader.service';

describe('CodeReaderService', () => {
  let service: CodeReaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodeReaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
