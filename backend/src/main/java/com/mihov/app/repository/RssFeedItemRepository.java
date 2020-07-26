package com.mihov.app.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mihov.app.model.RssFeedItem;

@Repository
public interface RssFeedItemRepository extends JpaRepository<RssFeedItem, Long>{

	Optional<RssFeedItem> getByLink(String link);
	
	List<RssFeedItem> findFirst20ByOrderByDateDesc();
	
	List<RssFeedItem> findByTitleIsContaining(String title);
}
