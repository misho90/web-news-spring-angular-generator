package com.mihov.app.service.rss;

import org.springframework.stereotype.Service;

import com.mihov.app.model.RssFeedSource;

@Service 
public interface RSSFeedSourceService {

	public RssFeedSource save(RssFeedSource source);
	
}
