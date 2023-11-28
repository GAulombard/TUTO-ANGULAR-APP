import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { AuthRoutingModule } from './auth-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, AuthRoutingModule, LoginComponent
  ],
  exports: [AuthRoutingModule, LoginComponent]
})
export class AuthModule { }
