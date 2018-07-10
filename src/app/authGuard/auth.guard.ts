import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

const helper = new JwtHelperService();

const decodedToken = helper.decodeToken(localStorage.getItem('currentUser'));
const expirationDate = helper.getTokenExpirationDate(localStorage.getItem('currentUser'));
const isExpired = helper.isTokenExpired(localStorage.getItem('currentUser'));
console.log(isExpired,decodedToken,expirationDate);

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('currentUser') && !isExpired) {
        // logged in so return true
        return true;
    }

    // not logged in so redirect to login page with the return url
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    return false;
  }
}
