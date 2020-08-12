import { Component, OnInit } from '@angular/core';
import { AllUserService } from '../service/all-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  title = 'Administration';

  constructor(private alluserService : AllUserService , private router : Router) { }

  ngOnInit(): void {
  }

}
