import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';

import { UsersService } from './users.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(private usersService:UsersService,private router:Router){

  }
  canActivate():boolean{
    if(!this.usersService.getToken()){
      this.router.navigateByUrl("/login")
    }
    return this.usersService.getToken();
  }
  
}
