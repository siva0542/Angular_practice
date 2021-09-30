import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { USERS } from './mock-users';
import { User } from './User';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import { Router } from '@angular/router';

const httpOptions={headers:new HttpHeaders({'content-type':'application/json',"Access-Control-Allow-Origin": "*",
"Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS"})}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  //public users=[];
  constructor(private http:HttpClient,private router:Router) { }
  // baseUrl='http://localhost:8080/display';
  // const http=HttpClient;

  JwtAuthToken:any
  user:any

  getUsers() : Observable<any>{
    this.loadToken()
    console.log(this.JwtAuthToken)
    const header =new HttpHeaders().set('Content-type','application/json')
    .set("Authorization","Bearer "+this.JwtAuthToken)
    if(this.JwtAuthToken===""){
      this.router.navigate(['/login'])
    }
    return this.http.get<any>("http://ec2-18-221-17-80.us-east-2.compute.amazonaws.com/display",{headers:header})
    // return this.http.get<any>("http://localhost:5000/display",{headers:header})
  }

  setUsers(users:User):Observable<User[]>{
    return this.http.post<User[]>("http://ec2-18-221-17-80.us-east-2.compute.amazonaws.com/register",users,httpOptions);

    // return this.http.post<User[]>("http://localhost:5000/register",users,httpOptions);
  }

  deleteUsers(name:String):Observable<any>{
      const url="http://ec2-18-221-17-80.us-east-2.compute.amazonaws.com/delete/"+name;
      console.log(name);
      return this.http.delete(url);
    }

    isExists(email: string): Observable<boolean>{
      console.log(email)
      return this.http.get<boolean>("http://ec2-18-221-17-80.us-east-2.compute.amazonaws.com/userExists/"+ email);
    }

    updateUser(email: string, user: User): Observable<User>{
      return this.http.post<User>("http://ec2-18-221-17-80.us-east-2.compute.amazonaws.com/update/" + email, user);
    }
  

    userLogin(users:User):Observable<any>{
      const url="http://ec2-18-221-17-80.us-east-2.compute.amazonaws.com/login";
      return this.http.post<User[]>(url,users,httpOptions);
    } 

    loadToken(){
      const token = localStorage.getItem('token')
      const user=localStorage.getItem('user')
      this.user=user
      this.JwtAuthToken = token
    }

    getToken(){
      return !!localStorage.getItem('token');
    }

    storeToken(token: any,user: any):any{
      localStorage.setItem('token',token)
      localStorage.setItem('user',JSON.stringify(user))
      this.JwtAuthToken = token;
      this.user = user;
    }

    logout(){
      localStorage.clear();
      this.router.navigate(['/login'])
    }

   
  
  // getUsers():Observable<object>{
  //   return this.http.get(this.baseUrl);
  // }

//   getUsers():Observable<object>{
//     return this.http.get(this.baseUrl).pipe(catchError(this.handleError))
//   }
//   handleError(error:any)
//   {
//     return throwError(error.message || "Server Error")

//   }

//   setUsers(users:User):Observable<any>{
//   return this.http.post("http://localhost:8080/register",users,httpOptions);
// }

// deleteUsers(name:String):Observable<any>{
//   const url="http://localhost:8080/delete/"+name;
//   return this.http.delete(url);
// }


  // setUsers(users:any){
  //   USERS.push(users)
  //   console.log(USERS);
  // }
  // deleteUser(name:any){
  //   this.removeItem(USERS,name);
  // }
  // removeItem(arr:any,value:any){
  //   var i=0;
  //   while(i<arr.length){
  //     if(arr[i].name===value){
  //       arr.splice(i,1);
  //     }
  //     else{
  //       ++i;
  //     }
  //   }
  // }
}
