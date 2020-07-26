import { Injectable } from '@angular/core';
import { RssFeedItemDto } from "src/app/services/data/fetch-latest-news.service";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  public sharedData : RssFeedItemDto[]; 

  private messageSource = new BehaviorSubject(this.sharedData);

  currentMessage = this.messageSource.asObservable();
  
  constructor() {
   }

   changeMessage(message: RssFeedItemDto[]) {
    this.messageSource.next(message)
  }
}
