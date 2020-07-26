package com.mihov.app.service.impl.rss;

import java.util.List;

import org.springframework.stereotype.Component;

import com.mihov.app.model.RssFeedSource;
import com.mihov.app.repository.RssFeedSourceRepository;
import com.mihov.app.service.rss.RSSFeedSourceService;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class RssFeedSourceServiceImpl implements RSSFeedSourceService {

	private final RssFeedSourceRepository rssFeedSourceRepository;

	public RssFeedSource save(RssFeedSource source) {
		return rssFeedSourceRepository.save(source);
	}

	public void delete(long id) {
		rssFeedSourceRepository.deleteById(id);
	}

	public List<RssFeedSource> findAll() {
		return rssFeedSourceRepository.findAll();
	}

}
