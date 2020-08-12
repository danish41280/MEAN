import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


import { SharedModule} from './shared/shared/shared.module';

import { MatSidenavModule, MatDrawer} from '@angular/material/sidenav';
import { AdminComponent } from './CustomDashboard/admin/admin.component';
import { ProfileComponent } from './CustomDashboard/profile/profile.component'
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './CustomDashboard/dashboard/dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ProfileComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    MatSidenavModule,
    RouterModule,
    ToastrModule.forRoot({
      timeOut : 1000,
      progressBar : true,
      progressAnimation : 'increasing',
      preventDuplicates : true
    })
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
