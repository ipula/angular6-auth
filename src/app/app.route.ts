import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from './authGuard/auth.guard';

export const ROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'user-profile', component: UserProfileComponent,canActivate: [AuthGuard] },
  { path: '', component: DashboardComponent , canActivate: [AuthGuard] },
];

