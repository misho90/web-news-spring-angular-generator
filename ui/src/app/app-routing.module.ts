import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowNewsComponent } from './components/show-news/show-news.component';
import { AddNewFeedComponent } from "src/app/components/add-new-feed/add-new-feed.component";


const routes: Routes = [
  { path: '', component: ShowNewsComponent },//canActivate, RouteGuardService
  { path: 'addNewComponent', component: AddNewFeedComponent },//canActivate, RouteGuardService
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
