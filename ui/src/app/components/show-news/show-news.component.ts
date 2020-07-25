import { Component, OnInit } from '@angular/core';
import { FetchLatestNewsService, RssFeedItemDto } from "src/app/services/data/fetch-latest-news.service";

@Component({
  selector: 'app-show-news',
  templateUrl: './show-news.component.html',
  styleUrls: ['./show-news.component.css']
})
export class ShowNewsComponent implements OnInit {

  feedNews : RssFeedItemDto[];
  constructor(private fetchLatestNewsService :FetchLatestNewsService ) { }
  

  ngOnInit(): void {
    this.refreshNews();
  }

  refreshNews(){
    this.fetchLatestNewsService.retrieveLatestNews().subscribe(
      response => {
        console.log(response);
        this.feedNews = response;
      }
    )
  }

}
