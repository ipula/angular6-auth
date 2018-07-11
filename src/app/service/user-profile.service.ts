import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  private jwt() {
    const headers = new HttpHeaders(
      {'Authorization':'Bearer ' + localStorage.getItem('currentUser'),
      'X-Client-Access-Key': 'pTRw7x5npC9y23wGr9JyPxnKDn2WHvH5TDNtE7DqgfScVv5jE4dBKgXxafn5',
      'X-Client-Secret':'tvqCBzFSwzHJgL3vW8VEsVyfhTvSMzA7xXtK4YM8pG26CCdmtnqV6PG5jQe3',
      'X-Client-Platform':'web',
      'X-Client-Version':'1',
      'X-Client-Security-Token':'AoGAfPWmHIyjcverHG/cfn2QV12MKMwZAqQvYh98nwQ4gCEVc6wPnlgrIhsSqLlK',
      'X-Client-UID': '1',
      'X-Client-Time':'1524200713'
      }
    );
    return headers;
  }

  userme(): Observable<any> {
    return this.http.get(this.apiUrl + '/api/v1/users/me',{headers: this.jwt()})
      .pipe(map(user => user
      ));
  }
  usermeEdit(data): Observable<any> {
    return this.http.put(this.apiUrl + '/api/v1/users/me',data,{headers: this.jwt()})
    .pipe(map(user => user
    ));
  }
}
