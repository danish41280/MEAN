import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AdminComponent } from '../admin/admin.component';

@Injectable({
  providedIn: 'root'
})
export class AllUserService {
  private ROOT_URL ="http://localhost:4000/api/listings";

  //http options
  private httpOptions ={
    headers : new HttpHeaders()
    .set("auth-token",localStorage.getItem("token"))
  };

  constructor(private http : HttpClient) { }

}
