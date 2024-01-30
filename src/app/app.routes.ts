import {Routes} from '@angular/router';
import {LoginComponent} from "./security/login/login.component";
import {RegisterComponent} from "./security/register/register.component";
import {HomeComponent} from "./dashboard/pages/home/home.component";
import {AccountInfosComponent} from "./dashboard/pages/account-infos/account-infos.component";
import {AccountComponent} from "./dashboard/pages/account/account.component";
import {TransactionsComponent} from "./dashboard/pages/transactions/transactions.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

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
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'account',
        children: [
          {
            path: '',
            component: AccountComponent
          },
          {
            path: 'info',
            component: AccountInfosComponent
          }
        ]
      },
      {
        path: 'transaction',
        component: TransactionsComponent
      },
    ]
  },
];
