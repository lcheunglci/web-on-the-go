import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  {
    path: 'welcome',
    loadComponent: () => import('./page/welcome/welcome.component').then((m) => m.WelcomeComponent),
  },
  {
    path: 'about',
    loadComponent: () => import('./page/about/about.component').then((m) => m.AboutComponent),
  },
  {
    path: 'products',
    loadComponent: () =>
      import('./page/products/products.component').then((m) => m.ProductsComponent),
  },
  {
    path: 'survey',
    loadComponent: () => import('./page/survey/survey.component').then((m) => m.SurveyComponent),
  },
  {
    path: 'cart',
    loadComponent: () => import('./page/cart/cart.component').then((m) => m.CartComponent),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./page/not-found/not-found.component').then((m) => m.NotFoundComponent),
  },
];
