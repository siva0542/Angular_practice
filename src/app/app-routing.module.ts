import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { DisplayComponent } from './display/display.component';
import { DeleteComponent } from './delete/delete.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationGuard } from './authentication.guard';
const routes: Routes = [
  {path:'register',component:RegisterComponent},
  {path:'display',component:DisplayComponent,canActivate:[AuthenticationGuard]},
  {path:'delete',component:DeleteComponent,canActivate:[AuthenticationGuard]},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
