import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment.prod';
import { Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // reslut:Login[];
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {

  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(this.apiUrl + '/api/v1/login', { email: username, password: password })
      .pipe(map(user => user));
  }
}
