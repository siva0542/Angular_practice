import { Component,Input, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../User';
import { Router } from '@angular/router';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  name=""
  //message=""
  constructor(private usersService:UsersService,private router:Router) { }
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
  deleteUsers(name:any){
    this.usersService.deleteUsers(name).subscribe((data)=>{
      this.router.navigate(['/display']);
      console.log(data)
    },(error)=>{
      this.router.navigate(['/display']);
      //this.message='Selected name is not available'
    });
  }
}

// deleteUser(email: any){
//   if (this.userService.isExists(email)){
//     if (email != ''){
//       this.userService.deleteUser(email).subscribe();
//       this.email = '';

//       this.alert_msg = "User with email id "+ email +" has been removed from DataBase";
//       this.alert_title = "Success!";

//   }
//   }
//   else{
//     this.alert_msg = "User with email id "+ email +" Not Exists in DataBase";
//     this.alert_title = "Error!";
    
//   }
//   setTimeout(() => {
//     document.getElementById("alert_close")?.click();
//   }, 5000);
// }
