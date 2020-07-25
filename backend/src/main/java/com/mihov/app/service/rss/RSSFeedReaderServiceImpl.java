package com.mihov.app.service.rss;

import java.io.IOException;
import java.net.URL;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.mihov.app.model.dto.RssFeedItemDto;
import com.sun.syndication.feed.synd.SyndFeed;
import com.sun.syndication.io.FeedException;
import com.sun.syndication.io.SyndFeedInput;
import com.sun.syndication.io.XmlReader;

import lombok.NoArgsConstructor;

@Service
@Component
@NoArgsConstructor
public class RSSFeedReaderImpl implements RSSFeedReaderService{

	public List<RssFeedItemDto> getFeed(String url) {
		Optional<SyndFeed> feed = Optional.empty();
		try {
			URL feedSource = RSSFeedUtils.create(url);
			SyndFeedInput input = new SyndFeedInput();
			feed = Optional.ofNullable(input.build(new XmlReader(feedSource)));
		} catch (IllegalArgumentException | FeedException | IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return RSSFeedUtils.fetchFeedItemsFromRssFeed(feed);
	}
	
}
