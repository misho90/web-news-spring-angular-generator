package com.mihov.app.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "rssFeedItem")
@NoArgsConstructor
@AllArgsConstructor
public class RssFeedItem implements Serializable {

  private static final long serialversionUID = 1L;

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

  @Getter
  @Setter
  @ManyToOne
  @JoinColumn(name = "feedSource_id", nullable = false)
  private RssFeedSource feedSource;
}
