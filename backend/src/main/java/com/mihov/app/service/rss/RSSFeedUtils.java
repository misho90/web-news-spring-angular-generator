package com.mihov.app.service.rss;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import com.mihov.app.model.dto.RssFeedItemDto;
import com.sun.syndication.feed.synd.SyndEntryImpl;
import com.sun.syndication.feed.synd.SyndFeed;

public class RSSFeedUtils {

	public static final List<RssFeedItemDto> fetchFeedItemsFromRssFeed(final Optional<SyndFeed> feed , final String sourceName) {
		if (feed.isPresent()) {
			List<SyndEntryImpl> list = feed.get().getEntries();
			return list.stream().map((rssFeed) -> new RssFeedItemDto(rssFeed.getTitle(),
					                                                 rssFeed.getLink(),
					                                                 rssFeed.getPublishedDate(),
					                                                 RSSFeedUtils.returnGuid(rssFeed.getLink()),
					                                                 sourceName)).collect(Collectors.toList());
		}
		return Collections.emptyList();
	}

	public static URL create(String urlString) {
		try {
			return new URL(urlString);
		} catch (MalformedURLException e) {
			throw new RuntimeException(e);
		}
	}

	private static Long returnGuid(String link) {
		link = link.replace(".html", "");
		if(link.lastIndexOf("/") == link.length() -1) {
			link = link.substring(0, link.length() - 1);
		}
		link = link.replace(".html", "");
		return Long.valueOf(link
				.substring(Math.max(link.lastIndexOf(".") + 1,
						Math.max(link.lastIndexOf("-") + 1, link.lastIndexOf("/") + 1)), link.length())
				.replaceAll("[^0-9]", ""));
	}
}
