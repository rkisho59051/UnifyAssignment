import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  firstName:string;
  timeAvail: number = 0;
  timeAvailMin:number = 0;
  timeBreak: number = 0;
  timeBreakMin: number =0;
  username:string;
  designation:string;
  total:number;
  approved:number;
  rejected:number;
  avghandlingtime:string;

  constructor(private userService:UserService, private router:Router) { }
  onLogout () {
    this.userService.deleteToken();
    this.router.navigate(['/login']);
  }
  ngOnInit() {
   this.userService.firstName.subscribe(data=>{
    this.firstName = data;
   })
    
  
    this.designation = 'Data Executive';
    this.total = 150;
    this.avghandlingtime = '00:15:00';
    this.approved = 95;
    this.rejected = this.total - this.approved;
  }
  available() {
    
    if(this.timeAvail > 0) {
      clearInterval(this.interval);
      this.timeAvail = 0;
      this.timeAvailMin = 0;
     
    }else
    this.interval = setInterval(() => {
      if(this.timeAvail < 59) {
        this.timeAvail++;
      }
      else{
        this.timeAvailMin = this.timeAvailMin + 1;
        this.timeAvail = 0;
      }
      
    },1000)
  }
  
  interval;
  break() {
    if(this.timeBreak > 0) {
      clearInterval(this.interval);
      this.timeBreak = 0;
      this.timeBreakMin = 0;
  
    }else{
    this.interval = setInterval(() => {
      if(this.timeBreak < 59) {
        this.timeBreak++;
      }
      else{
        this.timeBreakMin = this.timeBreakMin + 1;
        this.timeBreak = 0;
      }
     
    },1000)
  }
}
  
}
