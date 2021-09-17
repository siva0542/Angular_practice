import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../User';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
//@Input() userDetails:any
users : User[] = []
  constructor(private usersService:UsersService) { }

  ngOnInit(): void {
    this.users=this.usersService.getUsers();
  }

}
