import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PresidioComponent } from './presidio/presidio.component';
import { RegisterComponent } from './register/register.component';
import { DisplayComponent } from './display/display.component';
import { DeleteComponent } from './delete/delete.component';
import { FormsModule } from '@angular/forms';
import { UsersService } from './users.service';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    PresidioComponent,
    RegisterComponent,
    DisplayComponent,
    DeleteComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UsersService],
  //bootstrap: [AppComponent]
  bootstrap: [PresidioComponent]
})

export class AppModule { 
  
}
