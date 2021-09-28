import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../User';
import { analyzeAndValidateNgModules } from '@angular/compiler';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
//@Input() userDetails:any
// users : User[] = []
error:any
users:any;
  constructor(private usersService:UsersService) { }


  ngOnInit(): void {
    this.usersService.getUsers().subscribe((data)=>{
      this.users=data;
      console.log(data);
    },(error)=>{
      console.log(error);
      this.error=error;
    })
  }
  logout(){
    this.usersService.logout();
  }

}
