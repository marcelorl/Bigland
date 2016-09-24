import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { LoginComponent } from './login.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes);
