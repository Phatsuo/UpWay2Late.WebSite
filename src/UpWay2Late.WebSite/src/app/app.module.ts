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

import { ButtonsComponent } from './pages/projects/buttons/buttons.component';
import { CookieManagerComponent } from './pages/projects/cookie-manager/cookie-manager.component';
import { DeliciousExtensionComponent } from './pages/projects/delicious-extension/delicious-extension.component';
import { GoogleExtensionComponent } from './pages/projects/google-extension/google-extension.component';
import { PinboardExtensionComponent } from './pages/projects/pinboard-extension/pinboard-extension.component';
import { WindowAndTabExtensionComponent } from './pages/projects/window-and-tab-extension/window-and-tab-extension.component';
import { WinLaunchComponent } from './pages/projects/win-launch/win-launch.component';

import { ExtensionHeaderComponent } from './components/extension-header/extension-header.component';
import { KendoImagePreviewComponent } from './components/kendo-image-preview/kendo-image-preview.component';

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
        PrivacyComponent,
        ButtonsComponent,
        CookieManagerComponent,
        CookieManagerComponent,
        ExtensionHeaderComponent,
        KendoImagePreviewComponent,
        DeliciousExtensionComponent,
        GoogleExtensionComponent,
        PinboardExtensionComponent, WindowAndTabExtensionComponent, WinLaunchComponent
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
