import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email : new FormControl("",[Validators.required]),
    password : new FormControl("",[Validators.required])
  });

  constructor(private userServices : UserService, private router : Router , private toastr : ToastrService) { }

  ngOnInit(): void {
  }
  userLogin(){
    if(this.loginForm.valid){
      this.userServices.login(this.loginForm.value).subscribe(res=>{
        console.log(res);
        localStorage.setItem("token",res.token);
        this.loginForm.reset();
        if(this.userServices.loggedIn)
        {
          this.router.navigate(["user/dashboard"]);
        this.toastr.success("LogIn Successfully!");
        }
        
       
      },
      err => {
        console.log(err);
        this.loginForm.reset();
        this.toastr.error("Unsuccessfull!","title",{
          timeOut : 500,
          progressBar:false

        });

      })
    }
  }

}
