import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router, NavigationExtras } from '@angular/router';
import { checkAndUpdateBinding } from '@angular/core/src/view/util';
import { CheckType } from '@angular/core/src/view';
import { tokenNotExpired } from 'angular2-jwt';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  user: any;
  constructor(public http: Http, public router: Router) { }
  
  authenticateUser(userID,userPassword) {
    return this.http.post('/home/login', ({
      userID,
      userPassword
    })
    )
    .pipe(map(res => res.json())); // <== inserted
    
  }
  
  public get logIn(): boolean {
    return (localStorage.getItem('token') !== null);
  }


  storeUserData(token, user) {
    this.authToken = token;
    this.user = user;
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

   loggedIn() {
    return tokenNotExpired('id_token');
   }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}