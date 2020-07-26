import { TestBed } from '@angular/core/testing';

import { CreateRssFeedSourceService } from './create-rss-feed-source.service';

describe('CreateRssFeedSourceService', () => {
  let service: CreateRssFeedSourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateRssFeedSourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
