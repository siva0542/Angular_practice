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
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
   // this.users=this.userService.getUsers();
  }
  submitForm(){
    this.usersService.setUsers({
      name:this.name,
      password:this.password
    })
    this.name=""
    this.password=""
  }
}
