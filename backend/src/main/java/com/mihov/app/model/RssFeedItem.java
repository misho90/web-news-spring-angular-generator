package com.mihov.app.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "rssfeeditem")
@NoArgsConstructor
public class RssFeedItem {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

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
	private long guid;
}
