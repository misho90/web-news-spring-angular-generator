import { Component, OnInit, Output } from '@angular/core';
import { FetchLatestNewsService, RssFeedItemDto } from "src/app/services/data/fetch-latest-news.service";
import { SharedDataService } from "src/app/services/shared-data.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  phrase: string;

  public sharedData : RssFeedItemDto[]; 
  
  constructor(private fetchLatestNews : FetchLatestNewsService,
              private sharedDataService : SharedDataService) { }

  ngOnInit(): void {
    this.phrase = "";
    this.sharedDataService.currentMessage.subscribe(message => this.sharedData = message)
    this.fetchLatestNews.retrieveLatestNews();
  }

  search(){
      this.fetchLatestNews.search(this.phrase)
      .subscribe (
        data => {
          this.sharedData = data;
          this.sharedDataService.changeMessage(this.sharedData);
        }
      )
  }

}
