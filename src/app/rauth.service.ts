import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router, NavigationExtras } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class RauthService {

  constructor(private http: HttpClient, public router: Router) { }

  getRegister(userID, userPassword, userEmail, userName, userAge, userGender, userCategory, userIdentity, userParticipateClass, userOperateClass){
    //post these details to API server return user info if correct 
    return this.http.post('/home/register',{
      userID,
      userPassword, 
      userEmail,
      userName,
      userAge,
      userGender,
      userCategory,
      userIdentity,
      userParticipateClass,
      userOperateClass

    }).subscribe(data =>{
           
      if(data == 1){
        alert("회원 가입에 성공하셨습니다.");
        this.router.navigate(['login']);
      }
      else {
        alert("다시 시도해주세요 :<");
        this.router.navigate(['login']);
      
      }
    
    })
  }
}
