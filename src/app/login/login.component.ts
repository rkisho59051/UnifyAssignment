import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  firstName :string;
  model ={
    email:'',
    password:''
  }
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  serverErrorMessages: string;
  constructor(private userService:UserService,private router:Router) { }

  ngOnInit() {
  }
  onSubmit(form:NgForm)
  {
    this.userService.login(form.value).subscribe(res =>{
      this.userService.setToken(res['token']);
      this.userService.getUserProfile().subscribe(res=>{
        this.router.navigateByUrl('/dashboard');
        // this.model.firstName = res[]
        this.userService.firstName.subscribe(data => data=res['data']['first_name'])
        
        // this.userService.getUserName(this.firstName);
      },
      err=>{
        console.log(err);
      })
      
    },
    err=>{
      this.serverErrorMessages = err.error.message;
    })
  }

}
