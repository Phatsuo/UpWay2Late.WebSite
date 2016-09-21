import { Routes } from '@angular/router';

import { NewsComponent } from "./pages/news/news.component";

export const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/news',
        pathMatch: 'full'
    },
    {
        path: 'news',
        component: NewsComponent
    }
]