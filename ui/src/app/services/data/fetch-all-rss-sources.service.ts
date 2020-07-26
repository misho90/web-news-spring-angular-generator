import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


export class RssFeedSource {
  constructor(public name:string,
              public link: string,
              public id: number){ }
}

@Injectable({
  providedIn: 'root'
})
export class FetchAllRssSourcesService  {
  
    constructor(private http:HttpClient) { }
  
    retrieveLatestNews() {
      return this.http.get<RssFeedSource[]>('/api/rssSource/all');
      //console.log("Execute Hello World Bean Service")
    }
  }