import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private ROOT_URL ="http://localhost:4000/api/user";
  constructor( private http : HttpClient , private router : Router) { }

  login(user){
    return this.http.post<any>(`${this.ROOT_URL}/login`,user);
  }
  logOut(){
    localStorage.removeItem("token");
    this.router.navigate(["/user"])
  }
  loggedIn(){
    return !!localStorage.getItem("token");
  }
}
