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

import { Angular2CliAndDotNetCoreComponent } from './blogs/angular2-cli-and-dot-net-core/angular2-cli-and-dot-net-core.component';
import { Angular2TemplateWithEmbeddedGistComponent } from './blogs/angular2-template-with-embedded-gist/angular2-template-with-embedded-gist.component';

import { ButtonsComponent } from './pages/projects/buttons/buttons.component';
import { CookieManagerComponent } from './pages/projects/cookie-manager/cookie-manager.component';
import { DeliciousExtensionComponent } from './pages/projects/delicious-extension/delicious-extension.component';
import { GoogleExtensionComponent } from './pages/projects/google-extension/google-extension.component';
import { PickEmLeaguesComponent } from './pages/projects/pick-em-leagues/pick-em-leagues.component';
import { PinboardExtensionComponent } from './pages/projects/pinboard-extension/pinboard-extension.component';
import { WindowAndTabExtensionComponent } from './pages/projects/window-and-tab-extension/window-and-tab-extension.component';
import { WinLaunchComponent } from './pages/projects/win-launch/win-launch.component';
import { WinRoboCopyComponent } from './pages/projects/win-robo-copy/win-robo-copy.component';
import { WinRoboCopyCompactViewComponent } from './pages/projects/win-robo-copy/win-robo-copy-compact-view/win-robo-copy-compact-view.component';
import { WinRoboCopyScriptsComponent } from './pages/projects/win-robo-copy/win-robo-copy-scripts/win-robo-copy-scripts.component';
import { WinRoboCopyScheduleComponent } from './pages/projects/win-robo-copy/win-robo-copy-schedule/win-robo-copy-schedule.component';
import { WinRoboCopyResourcesComponent } from './pages/projects/win-robo-copy/win-robo-copy-resources/win-robo-copy-resources.component';

import { ExtensionHeaderComponent } from './components/extension-header/extension-header.component';
import { GitHubCommitLinkComponent } from './components/git-hub-commit-link/git-hub-commit-link.component';
import { GitHubGistRendererComponent } from './components/git-hub-gist-renderer/git-hub-gist-renderer.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { KendoImagePreviewComponent } from './components/kendo-image-preview/kendo-image-preview.component';
import { ResponsiveImageComponent } from './components/responsive-image/responsive-image.component';

import { DataService } from './services/data.service';
import { UtilsService } from './services/utils.service';

import { appRoutes } from './routes';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@NgModule({
    declarations: [
        AppComponent,
        // pages
        HomeComponent,
        NewsComponent,        
        ProjectsComponent,
        DownloadsComponent,
        ContactComponent,
        PrivacyComponent,
        // blogs
        Angular2CliAndDotNetCoreComponent,
        Angular2TemplateWithEmbeddedGistComponent,
        // projects
        ButtonsComponent,
        CookieManagerComponent,
        CookieManagerComponent,
        DeliciousExtensionComponent,
        GoogleExtensionComponent,
        PickEmLeaguesComponent,
        PinboardExtensionComponent,
        WindowAndTabExtensionComponent,
        WinLaunchComponent,
        WinRoboCopyComponent,
        WinRoboCopyScriptsComponent,
        WinRoboCopyScheduleComponent,
        WinRoboCopyResourcesComponent,
        WinRoboCopyCompactViewComponent,
        WinRoboCopyCompactViewComponent,
        // components
        ExtensionHeaderComponent,
        GitHubCommitLinkComponent,
        GitHubGistRendererComponent,
        JumbotronComponent,
        KendoImagePreviewComponent,
        ResponsiveImageComponent
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
