package com.mihov.app.service.impl.rss;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mihov.app.model.RssFeedItem;
import com.mihov.app.model.RssFeedSource;
import com.mihov.app.model.dto.RssFeedItemDto;
import com.mihov.app.repository.RssFeedItemRepository;
import com.mihov.app.repository.RssFeedSourceRepository;
import com.mihov.app.service.rss.RSSFeedReaderService;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
@Transactional
public class StoreAllFeedsIntoTheDatabaseServiceImpl {

  private final RssFeedSourceRepository rssFeedSourceRepository;

  private final RssFeedItemRepository rssFeedItemRepository;

  private final RSSFeedReaderService rssFeedReaderService;

  @Scheduled(fixedRate = 60000)
  public void sheduledStoreIntoTheDatabase() {
    List<RssFeedSource> rssFeedSources = rssFeedSourceRepository.findAll();

    rssFeedSources.stream()
                  .map(x -> rssFeedReaderService.getFeed(x.getLink(), x.getName()))
                  //		                                           .collect(Collectors.toList())
                  //		                                           .stream()
                  .flatMap(List::stream)
                  .forEach(x -> storeRssFeedItem(x));
    //		                                           .collect(Collectors.toList());
//    list.stream();
  }

  private void storeRssFeedItem(RssFeedItemDto feed) {
    Optional<RssFeedItem> item = this.rssFeedItemRepository.getByLink(feed.getLink());
    if (!item.isPresent()) {
      RssFeedSource feedSource = this.rssFeedSourceRepository.getByName(feed.getSourceName());
      rssFeedItemRepository.save(new RssFeedItem(null, feed.getTitle(), feed.getLink(), feed.getDate(), feed.getGuid(), feedSource));
    }
    ;
  }
}
