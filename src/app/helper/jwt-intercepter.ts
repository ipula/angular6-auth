// import { Injectable } from '@angular/core';
// import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
// import { Router } from '@angular/router';
// import { Observable } from 'rxjs';
// import { JwtHelperService } from '@auth0/angular-jwt';

// @Injectable()
// export class JwtIntercepter implements HttpInterceptor {
//   constructor(private router: Router){

//   }
//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     // add authorization header with jwt token if available
//     let currentUser = localStorage.getItem('currentUser');
//     const helper = new JwtHelperService();

//     if (currentUser) {
//       const helper = new JwtHelperService();
//       const isExpired = helper.isTokenExpired(localStorage.getItem('currentUser'));
//       if(!isExpired){
//         request = request.clone({
//           setHeaders: {
//             Authorization: `Bearer ${currentUser}`
//           }
//         });
//       }else{
//         localStorage.removeItem('currentUser');
//         this.router.navigate(['/login']);
//       }

//     }

//     return next.handle(request);
//   }
// }
