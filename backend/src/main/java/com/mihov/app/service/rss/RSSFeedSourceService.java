package com.mihov.app.service.rss;

import java.util.List;

import org.springframework.stereotype.Service;

import com.mihov.app.model.RssFeedSource;

@Service 
public interface RSSFeedSourceService {

	public RssFeedSource save(RssFeedSource source);
	
	public void delete(long id);
	
	public List<RssFeedSource> findAll();
}
