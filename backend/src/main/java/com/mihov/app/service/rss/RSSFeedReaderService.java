package com.mihov.app.service.rss;

import com.mihov.app.model.dto.RssFeedItemDto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public interface RSSFeedReaderService {
  public List<RssFeedItemDto> getFeed(final String url, final String sourceName);

  public List<RssFeedItemDto> retrieveNewest20();
}
