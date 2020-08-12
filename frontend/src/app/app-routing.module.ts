import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './CustomDashboard/admin/admin.component';
import { ProfileComponent } from './CustomDashboard/profile/profile.component';


const routes: Routes = [
  {
    path : '',
    redirectTo : "user",
    pathMatch : "full"
  },
  {
    path:'user',
    loadChildren :()=>import("./user/user.module").then(m=>m.UserModule)
  },
  {
    path : 'user/admin',
    component : AdminComponent
  },
  {
    path : 'user/profile',
    component : ProfileComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
