package com.mihov.app.repository;

import java.util.List;

import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mihov.app.model.RssFeedSource;

@Repository
public interface RssFeedSourceRepository extends JpaRepository<RssFeedSource, Long>{

	public RssFeedSource save(RssFeedSource source);
	
	RssFeedSource getByName(String name);
	
	List<RssFeedSource> findAll();

}
