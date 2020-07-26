import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


export class RssFeedItemDto {
  constructor(public message:string,
              public title: string ,
              public link: string,
              public date: any,
              public guid: number,
              public sourceName:string){ }
}


@Injectable({
  providedIn: 'root'
})
export class FetchLatestNewsService {

  feedNews : RssFeedItemDto[];

  constructor(private http:HttpClient) { }

  retrieveLatestNews() {
    return this.http.get<RssFeedItemDto[]>('/api/rss/printRSS');
    //console.log("Execute Hello World Bean Service")
  }
 
  search(word){
    return this.http.get<RssFeedItemDto[]>(
              '/api/rss/search/' + word);
  }

  getFeedNews(){
    return this.feedNews;
  }

  setFeedNews(feedNews : RssFeedItemDto[]){
    return this.feedNews = feedNews;
  }

}
