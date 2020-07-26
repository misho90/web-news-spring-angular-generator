import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


export class RssFeedSource {
  constructor(public name: string ,
              public link: string,
              public id:number
             ){ }
}

@Injectable({
  providedIn: 'root'
})
export class RssFeedSourceService {

  constructor(
    private http:HttpClient
  ) { }

  delete(rssFeedSource){
    return this.http.delete(
              '/api/rssSource/source/'+ rssFeedSource.id
                , rssFeedSource);
  }

  create(rssFeedSource){
    return this.http.post(
              '/api/rssSource/source'
                , rssFeedSource);
  }

  update(rssFeedSource){
    return this.http.put(
              '/api/rssSource/source'
                , rssFeedSource);
  }
}
