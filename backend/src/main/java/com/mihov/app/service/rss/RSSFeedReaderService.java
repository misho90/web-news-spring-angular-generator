package com.mihov.app.service.rss;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.mihov.app.model.dto.RssFeedItemDto;
import com.sun.syndication.feed.synd.SyndFeed;

@Service
public interface RSSFeedReaderService {

	public List<RssFeedItemDto> getFeed(final String url);

}
