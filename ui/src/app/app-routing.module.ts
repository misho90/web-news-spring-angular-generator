import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowNewsComponent } from './components/show-news/show-news.component';
import { RssFeedSourcesComponet } from "src/app/components/feed-sources/feed-sources.component";
import { LoginComponent } from "src/app/components/login/login.component";


const routes: Routes = [ 
  { path: '', component: ShowNewsComponent },//canActivate, RouteGuardService
  { path: 'rssSources', component: RssFeedSourcesComponet },//canActivate, RouteGuardService
  { path: 'login', component: LoginComponent },//canActivate, RouteGuardService
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
