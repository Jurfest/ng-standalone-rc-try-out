import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    title: 'Homepage',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'newsletter',
    title: 'Newsletter',
    loadComponent: () =>
      import('./newsletter/newsletter.component').then((m) => m.NewsletterComponent),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
