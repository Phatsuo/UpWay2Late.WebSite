import { Routes } from '@angular/router';

import { HomeComponent } from "./pages/home/home.component";
import { NewsComponent } from "./pages/news/news.component";
import { ProjectsComponent } from './pages/projects/projects.component';
import { DownloadsComponent } from './pages/downloads/downloads.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PrivacyComponent } from './pages/privacy/privacy.component'

import { Angular2AndUiBlockingComponent } from './blogs/angular2-and-ui-blocking/angular2-and-ui-blocking.component';
import { Angular2CliAndDotNetCoreComponent } from './blogs/angular2-cli-and-dot-net-core/angular2-cli-and-dot-net-core.component';
import { Angular2TemplateWithEmbeddedGistComponent } from './blogs/angular2-template-with-embedded-gist/angular2-template-with-embedded-gist.component';
import { ReactAndUiBlockingComponent } from './blogs/react-and-ui-blocking/react-and-ui-blocking.component';

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

export const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/news',
        pathMatch: 'full'
    },
    {
        path: 'news',
        component: NewsComponent
    },
    {
        path: 'blogs/angular2-cli-and-dot-net-core',
        component: Angular2CliAndDotNetCoreComponent
    },
    {
        path: 'blogs/angular2-template-with-embedded-gist',
        component: Angular2TemplateWithEmbeddedGistComponent
    },
    {
        path: 'blogs/angular2-and-ui-blocking',
        component: Angular2AndUiBlockingComponent
    },
    {
        path: 'blogs/react-and-ui-blocking',
        component: ReactAndUiBlockingComponent
    },
    {
        path: 'projects/buttons-project',
        component: ButtonsComponent
    },
    {
        path: 'projects/awesome-cookie-manager',
        component: CookieManagerComponent
    },
    {
        path: 'projects/chrome-delicious-extension-bookmark-sync',
        component: DeliciousExtensionComponent
    },
    {
        path: 'projects/chrome-google-search-extension',
        component: GoogleExtensionComponent
    },
    {
        path: 'projects/pick-em-leagues',
        component: PickEmLeaguesComponent
    },
    {
        path: 'projects/chrome-pinboard-extension-bookmark-sync',
        component: PinboardExtensionComponent
    },
    {
        path: 'projects/awesome-window-tab-manager',
        component: WindowAndTabExtensionComponent
    },
    {
        path: 'projects/winlaunch',
        component: WinLaunchComponent
    },
    {
        path: 'projects/winrobocopy',
        component: WinRoboCopyComponent
    },
    {
        path: 'projects/winrobocopy/compact-view',
        component: WinRoboCopyCompactViewComponent
    },
    {
        path: 'projects/winrobocopy/scripts',
        component: WinRoboCopyScriptsComponent
    },
    {
        path: 'projects/winrobocopy/schedule-robocopy-job',
        component: WinRoboCopyScheduleComponent
    },
    {
        path: 'projects/winrobocopy/robocopy-resources',
        component: WinRoboCopyResourcesComponent
    },
    {
        path: 'downloads',
        component: DownloadsComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'privacy',
        component: PrivacyComponent
    }
]