package com.mihov.app.model.dto;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
public class RssFeedItemDto {
	@Getter
	@Setter
	private String title;

	@Getter
	@Setter
	private String link;
	
	@Getter
	@Setter
	private Date date;
	
	@Getter
	@Setter
	private Long guid;
	
	@Getter
	@Setter
	private String sourceName;
	
}
