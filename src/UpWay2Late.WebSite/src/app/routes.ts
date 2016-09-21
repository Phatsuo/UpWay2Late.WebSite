import { Routes } from '@angular/router';

import { HomeComponent } from "./pages/home/home.component";
import { NewsComponent } from "./pages/news/news.component";
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
        path: 'projects/chrome-pinboard-extension-bookmark-sync',
        component: PinboardExtensionComponent
    },
    {
        path: 'projects/awesome-window-tab-manager',
        component: WindowAndTabExtensionComponent
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