import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { PostsListComponent } from './components/posts-list/posts-list.component';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';

import { PostDetailsGuard } from './guards/post-details.guard';
import { RoutingModule } from './routing/routing.module';



@NgModule({
  declarations: [
    AppComponent,
    PostsListComponent,
    NavbarComponent,
    FooterComponent,
    WelcomeComponent,
    NotfoundComponent,
    PostDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule // since Angular 4.3+
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
