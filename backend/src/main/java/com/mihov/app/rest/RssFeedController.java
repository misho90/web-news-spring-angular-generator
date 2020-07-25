package com.mihov.app.rest;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mihov.app.model.dto.RssFeedItemDto;
import com.mihov.app.service.rss.RSSFeedReaderService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(path = "/rss")
@RequiredArgsConstructor
public class RssFeedController {

	private final RSSFeedReaderService rssFeedReaderService;

	@GetMapping("/printRSS") 
	public ResponseEntity<List<RssFeedItemDto>> printRSS() {
		
		return ResponseEntity.status(HttpStatus.OK)
				             .body(rssFeedReaderService.retrieveNewest20());
	}
}
