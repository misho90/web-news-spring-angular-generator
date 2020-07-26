import { Component, OnInit } from '@angular/core';
import { FetchLatestNewsService, RssFeedItemDto } from "src/app/services/data/fetch-latest-news.service";
import { SharedDataService } from "src/app/services/shared-data.service";

@Component({
  selector: 'app-show-news',
  templateUrl: './show-news.component.html',
  styleUrls: ['./show-news.component.css']
})
export class ShowNewsComponent implements OnInit {

  feedNews : RssFeedItemDto[];
  constructor(private fetchLatestNewsService :FetchLatestNewsService,
              private sharedDataService : SharedDataService ) { }
  

  ngOnInit(): void {
    this.sharedDataService.currentMessage.subscribe(message => this.feedNews = message)
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
  public showResults(){
    this.feedNews = this.sharedDataService.sharedData;
  }

}
