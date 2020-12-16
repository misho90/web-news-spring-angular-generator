import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ShowNewsComponent } from './components/show-news/show-news.component';
import { FormsModule } from "@angular/forms";
import { RssFeedSourcesComponet } from "src/app/components/feed-sources/feed-sources.component";
import { LoginComponent } from './components/login/login.component';
import { environment } from '../environments/environment';
import { SharedDataService } from "src/app/services/shared-data.service";
import { BasicAuthenticationService } from './services/basic-authentication-service';
import { HttpIntercepterBasicAuthService } from './services/http/http-intercepter-basic-auth.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ShowNewsComponent,
    RssFeedSourcesComponet,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule
  ],
  providers: [
    SharedDataService,
    BasicAuthenticationService,
    {provide: HTTP_INTERCEPTORS, useClass: HttpIntercepterBasicAuthService, multi: true} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
