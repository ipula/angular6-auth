import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

const helper = new JwtHelperService();
if (localStorage.getItem('currentUser')) {
  const decodedToken = helper.decodeToken(localStorage.getItem('currentUser'));
  const expirationDate = helper.getTokenExpirationDate(localStorage.getItem('currentUser'));

  console.log(decodedToken, expirationDate);
}

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: Object) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (isPlatformBrowser(this.platformId)) {
      if (localStorage.getItem('currentUser')) {
        const isExpired = helper.isTokenExpired(localStorage.getItem('currentUser'));
        if (isExpired) {
          localStorage.removeItem('currentUser');
          this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
          return false;
        }
        // logged in so return true
        return true;
      }

      // not logged in so redirect to login page with the return url
      localStorage.removeItem('currentUser');
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
      return false;
    }
  }
}
