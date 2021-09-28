import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
password=""
name=""
email=""
message=""
data:any
  constructor(private usersService:UsersService,private router:Router) { }

  ngOnInit(): void {
  }

  userLogin(){
    const users={
      name:this.name,
      email:this.email,
      password:this.password
    }
    this.usersService.userLogin(users).subscribe(data=>{
      this.data=data
      // this.router.navigate(['/display']);
      console.log(data.token);
      localStorage.setItem('token',this.data.token)
    this.usersService.storeToken(data.token,data.user)
      this.router.navigate(['/display']);

    },(error)=>{
      this.message='Invalid Email or password'
    });
  }
}
