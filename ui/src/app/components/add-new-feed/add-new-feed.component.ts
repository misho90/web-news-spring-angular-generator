import { Component, OnInit } from '@angular/core';
import { CreateRssFeedSourceService, RssFeedSource } from "src/app/services/data/create-rss-feed-source.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-add-new-feed',
  templateUrl: './add-new-feed.component.html',
  styleUrls: ['./add-new-feed.component.css']
})

export class AddNewFeedComponent implements OnInit {

  rssFeedSource: RssFeedSource;

  constructor( private createRssFeedSourceService : CreateRssFeedSourceService,
               private route: ActivatedRoute,
               private router: Router ) { }

  ngOnInit(): void {
    this.rssFeedSource = new RssFeedSource("","");
  }

  save() {
      this.createRssFeedSourceService.create(this.rssFeedSource)
          .subscribe (
            data => {
              console.log(data)
            //  this.router.navigate(['todos'])
            }
          )
          this.rssFeedSource = new RssFeedSource("","");
    }
}
