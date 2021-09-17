import { Component,Input, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../User';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  name=""
  constructor(private usersService:UsersService) { }

  ngOnInit(): void {
  }
  deleteUser(name:any){
    this.usersService.deleteUser(name)
  }
}
