import { Component, OnInit } from '@angular/core';
import {UserProfileService} from '../service/user-profile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  userData={
    first_name:null,
    last_name: null,
    email: null,
    profile_picture: null,
    gender: null,
    birthday: null,
    phone_number: null
  };

  constructor( private userProfileService:UserProfileService) { }

  ngOnInit() {
    this.getUserDetail();
  }

  getUserDetail(){
    this.userProfileService.userme().subscribe(
      data=>{
        this.userData=data.data;
        console.log(this.userData);
      },
      error=>{
        console.log(error);
      }
    )
  }

  userEdit(data){
    this.userData=data;
    this.userProfileService.usermeEdit(this.userData).subscribe(
      data=>{
        console.log(data);
        this.getUserDetail();
      },
      error=>{
        console.log(error);
      }
    )
  }

}
