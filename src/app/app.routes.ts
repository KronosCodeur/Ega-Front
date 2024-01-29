import {Routes} from '@angular/router';
import {LoginComponent} from "./security/login/login.component";
import {RegisterComponent} from "./security/register/register.component";
import {HomeComponent} from "./home/home.component";

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  }
];
