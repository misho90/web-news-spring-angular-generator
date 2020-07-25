import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


export class RssFeedSource {
  constructor(public name: string ,
              public link: string
             ){ }
}

@Injectable({
  providedIn: 'root'
})
export class CreateRssFeedSourceService {

  constructor(
    private http:HttpClient
  ) { }

  create(RssFeedSource){
    return this.http.post(
              'http://localhost:8080/api/rssSource/createNewSource'
                , RssFeedSource);
  }


}
