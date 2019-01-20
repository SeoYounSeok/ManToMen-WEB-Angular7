import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';          // <== inserted
import { map } from 'rxjs/operators';           // <== inserted
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';
import { AddtutorComponent } from '../addtutor/addtutor.component';
import { HttpClient, HttpParams } from '@angular/common/http';
import { tokenNotExpired } from 'angular2-jwt';


@Injectable({
  providedIn: 'root'

})
export class DataService {
  authToken: any;
  user: any;
  constructor(public Auth: AuthService, public http: Http, private httpClient: HttpClient) { // <== modified

    console.log("Data service connected ...");  // <== inserted
  }

  getPosts() {                                  // <== inserted
    return this.http.post('/index/login/get', ({
      userID: localStorage.getItem('userID')
    })
    )
      .pipe(map(res => res.json()));
  }

  // Admin 으로 접속을 햇을 때 모든 정보값을 전송해준다.
  getAdmin() {
    let user = new Headers();
    user.append('Authorization',localStorage.getItem('cookies'));
    user.get('Authorization');
    user.append('Content-Type', 'application/json');
    console.log("getAdmin method...running")
    return this.http.get('/index/admin',{headers: user})
      .pipe(map(res => res.json()));
  }

  getUserDelete(userID) {
    let user = new Headers();
    user.append('Authorization',localStorage.getItem('cookies'));
    user.get('Authorization');
    user.append('Content-Type', 'application/json');
    return this.http.post('/index/delete', ({
      userID
    }) ,{headers:user}
    )
      .pipe(map(res => res.json())); // <== inserted
  }


  getClassDelete(ClassTutorID,ClassName) {
    let user = new Headers();
    user.append('Authorization',localStorage.getItem('cookies'));
    user.get('Authorization');
    user.append('Content-Type', 'application/json');
    return this.http.post('/class/delete', ({
      ClassTutorID,
      ClassName
    }) ,{headers:user}
    )
      .pipe(map(res => res.json())); // <== inserted
  }




  getSearch(userSearch) {
    let user = new Headers();
    user.append('Authorization',localStorage.getItem('cookies'));
    user.get('Authorization');
    user.append('Content-Type', 'application/json');   // <== inserted
    return this.http.get('/class/search?value='+ userSearch ,{headers: user})
    .pipe(map(res => res.json())); // <== inserted
}


getCategorySearch(categorysearch) {
  let user = new Headers();
  user.append('Authorization',localStorage.getItem('cookies'));
  user.get('Authorization');
  user.append('Content-Type', 'application/json');   // <== inserted
  return this.http.get('/class/categorysearch?value='+ categorysearch ,{headers: user})
  .pipe(map(res => res.json())); // <== inserted
}


  //여기에요 여기 문제 일으키는 여기입니다.
  // get 형식으로 보내주는 것을 연습해봅시다...ㅠㅠ..
  getReview(ClassName) {
    let user = new Headers();
    user.append('Authorization',localStorage.getItem('cookies'));
    user.get('Authorization');
    user.append('Content-Type', 'application/json');
    console.log("getReview!! method...running")
    return this.http.get('/class/review?value='+ ClassName ,{headers: user})
      .pipe(map(res => res.json())); // <== inserted
  }

  // addreview 입니다.
  getReviewInsert(ReviewClassName, ReviewuserID, ReviewContents, ReviewDate, ReviewScore) {
    let user = new Headers();
    user.append('Authorization',localStorage.getItem('cookies'));
    user.get('Authorization');
    user.append('Content-Type', 'application/json');
    console.log("getReviewInsert method...running")
    return this.http.post('/class/reviewinsert', ({
      ReviewClassName,
      ReviewuserID,
      ReviewContents,
      ReviewDate,
      ReviewScore
    }),{headers:user}
    )
      .pipe(map(res => res.json())); // <== inserted

  }

  getPointchange(userID,userPoint) {
    let user = new Headers();
    user.append('Authorization',localStorage.getItem('cookies'));
    user.get('Authorization');
    user.append('Content-Type', 'application/json');
    console.log("getPointchange method...running")
    return this.http.post('/index/changepoint', ({
      userID,
      userPoint
    }),{headers:user}
    )
      .pipe(map(res => res.json())); // <== inserted

  }

  getIdentitychange(userID,userIdentity) {
    let user = new Headers();
    user.append('Authorization',localStorage.getItem('cookies'));
    user.get('Authorization');
    user.append('Content-Type', 'application/json');
    console.log("getIdentitychange method...running")
    return this.http.post('/index/changeidentity', ({
      userID,
      userIdentity
    }),{headers:user}
    )
      .pipe(map(res => res.json())); // <== inserted

  }



  getPhoneNumber(userPhoneNumber) {
    let user = new Headers();
    user.append('Authorization',localStorage.getItem('cookies'));
    user.get('Authorization');
    user.append('Content-Type', 'application/json');
    return this.http.post('/class/sms', ({
      userPhoneNumber
    }) ,{headers:user}
    )
      .pipe(map(res => res.json())); // <== inserted
  }


  getAccepttutor(ClassTutorID, ClassName) {
    let user = new Headers();
    user.append('Authorization',localStorage.getItem('cookies'));
    user.get('Authorization');
    user.append('Content-Type', 'application/json');
    return this.http.post('/class/accept', ({
      ClassTutorID,
      ClassName
    }),{headers:user}
    )
      .pipe(map(res => res.json())); // <== inserted
  }

  getDenytutor(ClassName) {
    let user = new Headers();
    user.append('Authorization',localStorage.getItem('cookies'));
    user.get('Authorization');
    user.append('Content-Type', 'application/json');
    return this.http.post('/class/deny', ({
      ClassName
    }),{headers:user}
    )
      .pipe(map(res => res.json())); // <== inserted
  }

  getMypage(userID, userPassword, userEmail, userName, userAge, userGender, userCategory, userIdentity, userParticipateClass, userOperateClass) {                                  // <== inserted
    let user = new Headers();
    user.append('Authorization',localStorage.getItem('cookies'));
    user.get('Authorization');
    user.append('Content-Type', 'application/json');
    console.log(localStorage.getItem('userID'))
    return this.http.post('/index/modify', ({
      userID: localStorage.getItem('userID'),
      userPassword,
      userEmail,
      userName,
      userAge,
      userGender,
      userCategory,
      userIdentity,
      userParticipateClass,
      userOperateClass
    }) ,{headers:user}
    )
      .pipe(map(res => res.json())); // <== inserted

  }

  getEmailDetail(userEmail) {
    return this.http.post('/home/auth', ({
      userEmail
    })
    )
      .pipe(map(res => res.json())); // <== inserted

  }

  getAddclass(ClassName, ClassTutorID, ClassCategory, ClassTotalPeople, ClassTutorIntro, ClassIntro, ClassWhom, ClassContents, ClassPrice,
    ClassHour, ClassNumberOfTime, ClassPlace, ClassPlaceDetail, ClassWeek, ClassTime, ClassFirstTime, userPhoneNumber) { // <== inserted
      let user = new Headers();
      user.append('Authorization',localStorage.getItem('cookies'));
      user.get('Authorization');
      user.append('Content-Type', 'application/json');
      return this.http.post('/class/push', ({
      ClassName,
      ClassTutorID,
      ClassCategory,
      ClassTotalPeople,
      ClassTutorIntro,
      ClassIntro,
      ClassWhom,
      ClassContents,
      ClassPrice,
      ClassHour,
      ClassNumberOfTime,
      ClassPlace,
      ClassPlaceDetail,
      ClassWeek,
      ClassTime,
      ClassFirstTime,
      userPhoneNumber
    }),{headers:user}
    )
      .pipe(map(res => res.json())); // <== inserted

  }
  // Contents get 형식으로 불러오기 
  getContents() { 
    let user = new Headers();
    user.append('Authorization',localStorage.getItem('cookies'));
    user.get('Authorization');
    user.append('Content-Type', 'application/json');   // <== inserted
    return this.http.get('/class/get', {headers: user})
      .pipe(map(res => res.json())); // <== inserted
  }

  getTutormanage() {    
    let user = new Headers();    
    user.append('Authorization',localStorage.getItem('cookies'));
    user.get('Authorization');
    user.append('Content-Type', 'application/json');                            // <== inserted
    return this.http.get('/class/tutormanage',{headers: user})
      .pipe(map(res => res.json())); // <== inserted
  }

  getContentsDetail(ClassName) {
    let user = new Headers();
    user.append('Authorization',localStorage.getItem('cookies'));
    user.get('Authorization');
    user.append('Content-Type', 'application/json');   // <== inserted
    return this.http.post('/class/detail', ({
      ClassName
    }),{headers: user}
    )
      .pipe(map(res => res.json())); // <== inserted

  }

  getMypageClass(ClassTutorID) {
    let user = new Headers();
    user.append('Authorization',localStorage.getItem('cookies'));
    user.get('Authorization');
    user.append('Content-Type', 'application/json');   // <== inserted
    return this.http.post('/class/classmanage', ({
      ClassTutorID
    }),{headers: user}
    )
      .pipe(map(res => res.json())); // <== inserted

  }

  getParticipation(userID) {
    let user = new Headers();
    user.append('Authorization',localStorage.getItem('cookies'));
    user.get('Authorization');
    user.append('Content-Type', 'application/json');   // <== inserted
    return this.http.get('/index/participation?value='+ userID ,{headers: user})
    .pipe(map(res => res.json())); // <== inserted
}

  getClassApply(userID, ClassName) {
    let user = new Headers();
    user.append('Authorization',localStorage.getItem('cookies'));
    user.get('Authorization');
    user.append('Content-Type', 'application/json');   // <== inserted
    return this.http.post('/class/apply', ({
      userID,
      ClassName
    }),{headers: user}
    )
      .pipe(map(res => res.json())); // <== inserted

  }
  getuserReport(userEmail) {
    return this.http.post('/home/report', ({
      userEmail: localStorage.getItem('userEmail')
    })
    )
      .pipe(map(res => res.json())); // <== inserted

  }


  // 로그인에서는 쿠키 값을 얻어오는 함수를 적기 때문에 굳이 안보내도 됩니다.
  // 하지만, 나머지 클래스 및 모든 함수들에서는 수행을 해주어야 작동을 합니다
  // 로그아웃을 통해서 나머지 기능들을 초기화 시켜주는 것을 한번 해봅시당!!

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
   loggedIn() {
    return tokenNotExpired('id_token');
   }

   logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
    document.getElementById('puseradmin').style.display = "none"
    document.getElementById('ptutoradmin').style.display = "none"
  }

  storeUserData(token, user) {
    this.authToken = token;
    this.user = user;
  }

} 
