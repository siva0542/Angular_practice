import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

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
  message=""

  users: User[]=[]

  constructor(private usersService: UsersService,private router:Router) { }

  ngOnInit(): void {
   // this.users=this.userService.getUsers();
  }


  // submitForm(){
  //   const users1={
  //     name:this.name,
  //     email:this.email,
  //     password:this.password
  //   }
  //   console.log(users1);
  //   this.usersService.setUsers(users1).subscribe((user)=>{
  //     this.users.push(user);
  //   })
  // }


  submitForm(){
    const users={
      name:this.name,
      email:this.email,
      password:this.password
    }
    console.log(users);
    this.usersService.setUsers(users).subscribe((data)=>{
      this.users=data;
      this.router.navigate(['/login']);
    },(error)=>{
      this.message='user already exists'
    });
  }





  // submitForm(){
  //   // if (!this.usersService.isExists(this.email)){
  //   //   if (this.name != '' && this.email != '' && this.password != ''){
  //   this.usersService.setUsers({
  //     name:this.name,
  //     email:this.email,
  //     password:this.password
  //   })
  // // }
  //   this.name=""
  //   this.email=""
  //   this.password=""
  // }
}
