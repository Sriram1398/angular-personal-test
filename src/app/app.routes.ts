import { Routes } from '@angular/router';
import {App} from './app';
import {Login} from './login/login';

export const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path:'login',component:Login
  },
  {
    path:'app',component:App
  }

];
