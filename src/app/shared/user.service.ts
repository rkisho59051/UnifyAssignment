import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  firstName = new Subject<any>();
  noAuthHeader = {headers: new HttpHeaders ({'NoAuth': 'True'})};
  constructor(private http:HttpClient,private router:Router) { }
  login(authCredentials) {
    return this.http.post(environment.apiBaseUrl + '/login', authCredentials, this.noAuthHeader);
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
  }

  getUserProfile() {
    return this.http.get(environment.apiBaseUrl + '/users/2');
    
  }

  
  // getUserPayload(){
  //   var token = this.getToken();
  //   if(token) {
  //     var userPayload = atob(token.split('.')[1]);
  //     return JSON.parse(userPayload);
  //   }
  //   else return null;
  // }

  // isLoggedIn (){
  //   var userPayload = this.getUserPayload();
  //   if(userPayload)
  //   return userPayload.exp > Date.now() / 1000;
  //   else
  //   return false;
  // }
}
