import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then(m => m.LoginPage)
  },
  {
    path: 'signup',
    loadComponent: () => import('./pages/signup/signup.page').then(m => m.SignupPage)
  },
  {
    path: 'reset',
    loadComponent: () => import('./pages/reset/reset.page').then(m => m.ResetPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then(m => m.HomePage),
    canActivate: [AuthGuard]
  },
  {
    path: 'menu',
    loadComponent: () => import('./pages/apis/menu/menu.page').then(m => m.MenuPage),
    canActivate: [AuthGuard]
  },
  {
    path: 'api-view/:id',
    loadComponent: () => import('./pages/apis/api-view/api-view.page').then(m => m.ApiViewPage),
    canActivate: [AuthGuard]
  }
];
