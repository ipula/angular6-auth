import { Component, OnInit } from '@angular/core';
import {LoginService} from '../service/login.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService,private router:Router) { }

  ngOnInit() {
  }

  doLogin(email,password){
    console.log(email,password);
    this.loginService.login(email,password).subscribe(
      data => {
        // Handle result
        console.log(data);
         localStorage.setItem('currentUser', JSON.stringify(data.data.access_token));
        this.router.navigate(['/']);
      },
      error => {
        console.log(error);
      });
  }

}
