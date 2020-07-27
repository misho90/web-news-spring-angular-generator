package com.mihov.app.service.rss;

import com.mihov.app.model.RssFeedSource;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface RSSFeedSourceService {

  public RssFeedSource save(RssFeedSource source);

  public void delete(long id);

  public List<RssFeedSource> findAll();
}
