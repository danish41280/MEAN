import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [LoginComponent, TestComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule
      
  ]
})
export class UserModule { }
