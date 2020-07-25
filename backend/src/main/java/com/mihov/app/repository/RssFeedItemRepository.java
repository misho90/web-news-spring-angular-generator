package com.mihov.app.repository;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mihov.app.model.RssFeedItem;

@Repository
public interface RssFeedItemRepository extends JpaRepository<RssFeedItem, Long>{

	Optional<RssFeedItem> getByTitleAndGuid(String title, Long guid);
	
	List<RssFeedItem> findFirst20ByOrderByDateDesc();
}
