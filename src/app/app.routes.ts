import { Routes } from '@angular/router';
import { App } from './app';
import { ContactUs } from './contact-us/contact-us';
import { AboutUs } from './about/about-us';
import { Reports } from './reports/reports';
import { Pledges } from './pledges/pledges';
import {Profile} from './profile/profile';
import {Dashboard} from './dashboard/dashboard';
import {Login} from './login/login';

export const routes: Routes = [{
  path: 'home',
  component: Dashboard
},
  {
    path: 'about-us',
    component: AboutUs
  },
  {
    path: 'contact-us',
    component: ContactUs
  },
  {
    path: 'pledges',
    component: Pledges
  },
  {
    path: 'reports',
    component: Reports
  },
  {
    path: 'profile',
    component: Profile
  },
  {
    path: 'login',
    component: Login
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];
