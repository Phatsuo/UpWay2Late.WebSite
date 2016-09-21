﻿import { Routes } from '@angular/router';

import { HomeComponent } from "./pages/home/home.component";
import { NewsComponent } from "./pages/news/news.component";
import { ProjectsComponent } from './pages/projects/projects.component';
import { DownloadsComponent } from './pages/downloads/downloads.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PrivacyComponent } from './pages/privacy/privacy.component'

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
        path: 'projects',
        component: ProjectsComponent
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