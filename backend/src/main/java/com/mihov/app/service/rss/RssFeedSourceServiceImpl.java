package com.mihov.app.service.rss;

import org.springframework.stereotype.Component;

import com.mihov.app.model.RssFeedSource;
import com.mihov.app.repository.RssFeedSourceRepository;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class RssFeedSourceServiceImpl implements RSSFeedSourceService {

	private final RssFeedSourceRepository rssFeedSourceRepository;

	public RssFeedSource save( RssFeedSource source ) {
		return rssFeedSourceRepository.save(source);
	}

}
