import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { USERS } from './mock-users';
import { User } from './User';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  //public users=[];
  constructor(private http:HttpClient) { }

  // const http=HttpClient;

  getUsers() : Observable<User[]>{
    return this.http.get<User[]>("http://localhost:5000/display")
  }
  setUsers(users:any){
    USERS.push(users)
    console.log(USERS);
  }
  deleteUser(name:any){
    this.removeItem(USERS,name);
  }
  removeItem(arr:any,value:any){
    var i=0;
    while(i<arr.length){
      if(arr[i].name===value){
        arr.splice(i,1);
      }
      else{
        ++i;
      }
    }
  }
}
