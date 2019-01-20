import { Component, OnInit } from '@angular/core';
import { DataService } from './../services/data.service';
import { Router, NavigationExtras } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-addtutor',
  templateUrl: './addtutor.component.html',
  styleUrls: ['./addtutor.component.css']
})
export class AddtutorComponent implements OnInit {
  checktutor: Tutorcheck[];

  //objectKeys = Object.keys;
  constructor(private dataService: DataService, public router: Router) {
    console.log("addtutor...? constructor run...");

  }

  ngOnInit() {
    console.log('addtutor.component.ts : ngOnInt');
    this.dataService.getPosts().subscribe((checktutor) => {
      console.log(checktutor);  // for testing if works on console 
      if (checktutor != 0) {
        this.checktutor = [checktutor];
        console.log('POST 값 확인 : ' + checktutor);
        const userIdentity = checktutor.userIdentity;
        console.log("유저아이덴티티보자" + userIdentity);
        if (userIdentity == "Tutor") {

          alert("당신은 이미 튜터입니다~!");
          this.router.navigate(['']);
        }
        else
          return;

      }
      else {
        alert("서버 에러 발생");
      }
    });

    function myFunction() {
      document.getElementById("demo").innerHTML = "Hello World";
    }
  }
}
interface Tutorcheck {
  userID: string,
  userPassword: string,
  userEmail: string,
  userName: string,
  userAge: string,
  userGender: string,
  userCategory: string,
  userIdentity: string,
  userParticipateClass: string,
  userOperateClass: string,
  userPhoneNumber: string
}
