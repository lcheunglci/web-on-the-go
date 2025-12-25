import { Routes } from '@angular/router';
import { isUserAuthenticatedCanMatchGuard } from './is-user-authenticated-can-match-guard';

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
    path: 'products/:id',
    loadComponent: () =>
      import('./page/products/product-detail/product-detail.component').then(
        (m) => m.ProductDetailComponent
      ),
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
    path: 'my-account',
    canMatch: [isUserAuthenticatedCanMatchGuard],
    loadComponent: () =>
      import('./page/my-account/my-account.component').then((m) => m.MyAccountComponent),
  },
  {
    path: 'my-orders',
    canMatch: [isUserAuthenticatedCanMatchGuard],
    loadComponent: () =>
      import('./page/my-orders/my-orders.component').then((m) => m.MyOrdersComponent),
  },
  {
    path: 'contact',
    loadComponent: () => import('./page/contact/contact.component').then((m) => m.ContactComponent),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./page/not-found/not-found.component').then((m) => m.NotFoundComponent),
  },
];
