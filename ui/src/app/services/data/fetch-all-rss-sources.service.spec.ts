import { TestBed } from '@angular/core/testing';

import { FetchAllRssSourcesService } from './fetch-all-rss-sources.service';

describe('FetchAllRssSourcesService', () => {
  let service: FetchAllRssSourcesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchAllRssSourcesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
