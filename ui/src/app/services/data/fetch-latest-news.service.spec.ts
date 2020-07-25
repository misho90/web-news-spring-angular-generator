import { TestBed } from '@angular/core/testing';

import { FetchLatestNewsService } from './fetch-latest-news.service';

describe('FetchLatestNewsService', () => {
  let service: FetchLatestNewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchLatestNewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
