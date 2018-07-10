import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './authGuard/auth.guard';

export const ROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: DashboardComponent , canActivate: [AuthGuard] },
];

