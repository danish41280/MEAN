import { NgModule, ViewChild } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../user/login/login.component';
import { AdminComponent } from '../CustomDashboard/admin/admin.component';
import { ProfileComponent } from '../CustomDashboard/profile/profile.component';
import { DashboardComponent } from '../CustomDashboard/dashboard/dashboard.component';
import { TestComponent } from './test/test.component';


const routes: Routes = [
  {
    path : '',
    component : LoginComponent
  },
  {
    path : "dashboard",
    component : DashboardComponent,
    children : [
      {
        path : "test",
        component : TestComponent
      }
    ]
 
  }

  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
