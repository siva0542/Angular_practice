import { Injectable } from '@angular/core';
import { USERS } from './mock-users';
import { User } from './User';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  //public users=[];
  constructor() { }

  getUsers() : User[]{
    return USERS
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
