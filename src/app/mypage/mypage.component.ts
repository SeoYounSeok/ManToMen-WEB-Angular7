import { Component, OnInit } from '@angular/core';
import { DataService } from './../services/data.service';
import { Router, NavigationExtras } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

let editnum: number = 1;

@Component({
  selector: 'app-mypage',
  templateUrl: './mypage.component.html',
  styleUrls: ['./mypage.component.css']
})

// addtutor와 같은, 코드 재사용 가능 


export class MypageComponent implements OnInit {
  posts: Post[];
  constructor(private dataService: DataService, private cs: CookieService, public router: Router) { }

  ngOnInit() {
    const editnum = 1;
    editimage(editnum);
    console.log('mypage.component.ts : ngOnInt');
    this.dataService.getPosts().subscribe((posts) => {
      
      if(posts != 0){
      this.posts = [posts];
    
      const userEmail = posts.userEmail;
      const userName = posts.userName;
      const userGender = posts.userGender;
      localStorage.setItem('puserEmail', userEmail);
      localStorage.setItem('puserName', userName);
      localStorage.setItem('puserGender', userGender);
    }
    else{
      alert("서버 에러 발생");
    }
    });

  }
  oneditimage() {
    editimage(editnum);
    
  }

  onDelete() {
    const userID = localStorage.getItem('userID');
    
    if (confirm("정말 회원 탈퇴 하시겠습니까?") == true) {
      alert("정상 처리 되었습니다.");
      this.dataService.getUserDelete(userID).subscribe((posts) => {
        
        if(posts != 0){
        // [] 를 붙여줘야 array 형식으로 받아 이게 오브젝트 형식이면 안됩니다. 
        this.posts = posts;
        localStorage.clear();
        document.getElementById('puseradmin').style.display = "none"
        document.getElementById('ptutoradmin').style.display = "none"
        this.cs.deleteAll('user');
        this.dataService.logout();
      
        document.getElementById('mlogin').style.display = "inline-block"
        document.getElementById('mregister').style.display = "inline-block"
        //mlogin 
        document.getElementById('mlogout').style.display = "none"
        document.getElementById('mmypage').style.display = "none"
        this.router.navigate(['']);
       }
       else{
         alert("서버 오류 발생");
         this.router.navigate(['']);
       }
      });
    }
    else {   //취소
      alert("취소 처리 되었습니다.");
      return;
    }


  }

  MypageUser(event) {
    event.preventDefault()
    function getRadioValue(theRadioGroup) {
      for (let i = 0, l = theRadioGroup.length; i < l; i++) {
        if (theRadioGroup[i].checked) {
          return theRadioGroup[i].value;
        }
      }
    }
    function getCheckBox(theCheckBox) {
      var check = '';
      for (let i = 0, l = theCheckBox.length; i < l; i++) {
        if (theCheckBox[i].checked) {

          check += theCheckBox[i].value + "//";

        }
      }
      return check;
    }

    const target = event.target;
    const checkbox = document.getElementsByName('userCategory');
    const userCategory = getCheckBox(checkbox);
    const radioButton= document.getElementsByName('test');
    const userGender = getRadioValue(radioButton);
    const userID = localStorage.getItem('userID');
    const userPassword = target.querySelector('#userPassword').value;
    const userEmail = localStorage.getItem('puserEmail');
    const userName = localStorage.getItem('puserName');
    const userAge = target.querySelector('#userAge').value;
    const userIdentity = "Tutee";
    const userParticipateClass = null;
    const userOperateClass = null;
    this.dataService.getMypage(userID, userPassword, userEmail, userName, userAge, userGender, userCategory, userIdentity, userParticipateClass, userOperateClass).subscribe((posts) => {
       if (posts != 0) {
        this.posts = [posts];
        const userPicture = posts.userPicture;
        localStorage.setItem('userPicture', userPicture);
        const userEmail = posts.userEmail;
        const userName = posts.userName;
        const userGender = posts.userGender;
        localStorage.setItem('puserEmail', userEmail);
        localStorage.setItem('puserName', userName);
        localStorage.setItem('puserGender', userGender);
         alert("수정 성공하였습니다.");
        this.router.navigate(['introduce']);
      }
      else {
        alert("수정 실패하였습니다");
        this.router.navigate(['introduce']);
      }
    });

  }
}

function editimage(num) {
  if (num == 0) {
    document.getElementById("editimage").style.display = "block";
    editnum = 1;

  }
  else {
    document.getElementById("editimage").style.display = "none";
    editnum = 0;
  }
}



interface Post {
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
  userPhoneNumber: string,
  userPicture: string,
  userPoint: string
}
