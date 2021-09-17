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
@NgModule({
  declarations: [
    AppComponent,
    PresidioComponent,
    RegisterComponent,
    DisplayComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [UsersService],
  //bootstrap: [AppComponent]
  bootstrap: [PresidioComponent]
})

export class AppModule { 
  
}
