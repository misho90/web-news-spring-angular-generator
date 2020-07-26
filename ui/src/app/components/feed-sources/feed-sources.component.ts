import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FetchAllRssSourcesService } from "src/app/services/data/fetch-all-rss-sources.service";
import { RssFeedSource, RssFeedSourceService } from "src/app/services/data/rss-feed-source.service";

@Component({
  selector: 'app-add-new-feed',
  templateUrl: './feed-sources.html',
  styleUrls: ['./feed-sources.css']
})

export class RssFeedSourcesComponet implements OnInit {

  rssFeedSource: RssFeedSource;
  exsistingRssSources:  RssFeedSource[];
  @Input('change') foundedRssSources:  RssFeedSource[];
  rssSourcesTemp = [];

  constructor( private createRssFeedSourceService : RssFeedSourceService,
               private fetchAllRssSourceService :FetchAllRssSourcesService,
               private route: ActivatedRoute,
               private router: Router ) { }

  ngOnInit(): void {
    this.rssFeedSource = new RssFeedSource("","",0);
    this.printAllRssSources();
  }

  save() {
    if(this.rssFeedSource.id != 0){
      this.createRssFeedSourceService.update(this.rssFeedSource)
      .subscribe (
        data => {
          console.log(data)
        //  this.router.navigate(['todos'])
        }
      )
      this.rssFeedSource = new RssFeedSource("","",0);        
    } else {
      this.createRssFeedSourceService.create(this.rssFeedSource)
      .subscribe (
        data => {
          console.log(data)
          this.printAllRssSources();
        }
      )
      this.rssFeedSource = new RssFeedSource("","",0);        
    }
  }

  delete(id:number) {
      this.edit(id);
      this.createRssFeedSourceService.delete(this.rssFeedSource)
      .subscribe (
        data => {
          console.log(data)
          this.printAllRssSources();
        }
      )
      this.rssFeedSource = new RssFeedSource("","",0);        

  }

  edit(id:number){
    this.exsistingRssSources.forEach(element => {
      if(element.id == id){
        this.rssFeedSource.name = element.name;
        this.rssFeedSource.link = element.link;
        this.rssFeedSource.id = element.id;
      }
    });
   
  }

  printAllRssSources(){
     this.fetchAllRssSourceService.retrieveLatestNews().subscribe(
      response => {
        this.exsistingRssSources = response;
      }
    )
  }

}
