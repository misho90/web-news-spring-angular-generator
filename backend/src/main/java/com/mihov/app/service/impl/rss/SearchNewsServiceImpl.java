package com.mihov.app.service.impl.rss;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.mihov.app.model.RssFeedItem;
import com.mihov.app.model.dto.RssFeedItemDto;
import com.mihov.app.repository.RssFeedItemRepository;
import com.mihov.app.service.rss.SearchNewsService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class SearchNewsServiceImpl implements SearchNewsService {

	public final RssFeedItemRepository rssFeedItemRepository;
	
	@Override
	public List<RssFeedItemDto> search(String word) {
		return rssFeedItemRepository.findByTitleIsContaining(word).stream().map((rssFeed) -> new RssFeedItemDto(rssFeed.getTitle(),
                rssFeed.getLink(),
                rssFeed.getDate(),
                rssFeed.getGuid(),
                rssFeed.getFeedSource().getName())).collect(Collectors.toList());
	}
}
