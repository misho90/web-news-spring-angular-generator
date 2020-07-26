package com.mihov.app.service.rss;

import java.util.List;

import org.springframework.stereotype.Service;

import com.mihov.app.model.dto.RssFeedItemDto;

@Service
public interface SearchNewsService {
	public List<RssFeedItemDto> search(String word);
}
