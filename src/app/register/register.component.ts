import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  app_name="Simple Application"
  name=""
  password=""
  email=""
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
   // this.users=this.userService.getUsers();
  }
  submitForm(){
    // if (!this.usersService.isExists(this.email)){
    //   if (this.name != '' && this.email != '' && this.password != ''){
    this.usersService.setUsers({
      name:this.name,
      email:this.email,
      password:this.password
    })
  // }
    this.name=""
    this.email=""
    this.password=""
  }
}
