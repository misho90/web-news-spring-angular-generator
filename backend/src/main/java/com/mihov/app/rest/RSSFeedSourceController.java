package com.mihov.app.rest;

import java.net.URI;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.mihov.app.model.RssFeedSource;
import com.mihov.app.service.rss.RSSFeedSourceService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(path = "/rssSource")
@RequiredArgsConstructor
public class RSSFeedSourceController {

	private final RSSFeedSourceService rssFeedSourceService;
	
	@PostMapping("/createNewSource")
	public ResponseEntity<Void> updateTodo( @RequestBody RssFeedSource source ){
		
		RssFeedSource createdSource = rssFeedSourceService.save(source);
		
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{id}").buildAndExpand(createdSource.getId()).toUri();
		
		return ResponseEntity.created(uri).build();
	}
}
