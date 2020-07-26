import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  user:User;

  constructor(private router: Router) {

   }

  ngOnInit(): void {
    this.user = new User();
  }

  login(){
    if(this.user.username === 'admin' &&this.user.password === 'Bulgaria')
      this.router.navigate(['rssSources'])
  };

}

export class User{
  username:string;
  password:string;
}