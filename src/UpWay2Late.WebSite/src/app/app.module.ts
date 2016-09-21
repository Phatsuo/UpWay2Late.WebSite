import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NewsComponent } from './pages/news/news.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { DownloadsComponent } from './pages/downloads/downloads.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PrivacyComponent } from './pages/privacy/privacy.component'

import { DataService } from './services/data.service';
import { UtilsService } from './services/utils.service';

import { appRoutes } from './routes';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    HomeComponent,
    ProjectsComponent,
    DownloadsComponent,
    ContactComponent,
    PrivacyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  providers: [
      DataService,
      UtilsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
