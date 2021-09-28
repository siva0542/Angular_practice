import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-presidio',
  templateUrl: './presidio.component.html',
  styleUrls: ['./presidio.component.css']
})
export class PresidioComponent implements OnInit {

  title="Presidio"

   //List<ArrayList> names = new ArrayList();

  constructor(public usersService:UsersService,private router:Router) { }
  token:any;
  notsignin:boolean=true;
  user:boolean=false;
  ngOnInit(): void {
    const token = localStorage.getItem('user')
    if(token){
    this.notsignin=false
    const token1=JSON.parse(token)
      console.log("User login....")
      this.user=true
  }
}

}
