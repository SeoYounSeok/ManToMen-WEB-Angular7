import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import { Router, NavigationExtras } from '@angular/router';



@Component({
  selector: 'app-tutor',
  templateUrl: './tutor.component.html',
  styleUrls: ['./tutor.component.css']
})
export class TutorComponent implements OnInit {
  rands:Rand[];
  posts:Post[];
  constructor(private dataService:DataService , public router: Router) { }

  ngOnInit() {
    smssecurity(1);
    console.log('addtutor.component.ts : ngOnInt');
    this.dataService.getPosts().subscribe((posts)=>{
      console.log(posts);  // for testing if works on console 
      this.posts = [posts];
      console.log('POST 값 확인 : '+ posts);
      const userEmail = posts.userEmail;
      const userName = posts.userName;
      const userGender = posts.userGender;

      localStorage.setItem('puserEmail',userEmail);
      localStorage.setItem('puserName',userName);
      localStorage.setItem('puserGender',userGender);
    });
    
 }
 PhoneUser(event){
  smssecurity(0);
  event.preventDefault( )
  const target = event.target
  const userPhoneNumber = target.querySelector('#userPhoneNumber').value
  console.log(userPhoneNumber);
  // 유저 폰 번호를 만든 것 입니다.
  localStorage.setItem('userPhoneNumber',userPhoneNumber) 
    this.dataService.getPhoneNumber(userPhoneNumber).subscribe((rands)=>{
    this.rands = [rands];
    const phonerand = rands.rand;
    console.log(phonerand);  // for testing if works on console 
    localStorage.setItem('phonerand',phonerand);
  });  
 }
 TwoPhoneUser(event){
  event.preventDefault( )
  const target = event.target
  const phonenumberpassword = target.querySelector('#phonenumberpassword').value
  localStorage.getItem('phonerand')
  console.log("이 값은 Two 안의 phonenumberpassword" + phonenumberpassword)
  console.log("이 값은 Two 안의 phonerand" + localStorage.getItem('phonerand'))
  if (localStorage.getItem('phonerand') == phonenumberpassword){
    console.log("값이 같습니다.");
    this.router.navigate(['addclass']);
 }
  else {
    console.log("값이 다릅니다."); 
    alert("휴대폰 인증에 실패하였습니다.");
  }
}
 
}
interface Post{
  userID:string,
  userPassword:string,
  userEmail:string,
  userName:string,
  userAge:string,
  userGender:string,
  userCategory: string,
  userIdentity:string,
  userParticipateClass:string,
  userOperateClass:string,
  userPhoneNumber:string,
  userPoint: string
}


interface Rand{
  rand:String
}

// 인증 번호를 보여주게 하기 위해서 만든 함수 입니다. 
function smssecurity(num)
{
    if(num==0)
    document.getElementById("smssecurity").style.display="block";
    else
    document.getElementById("smssecurity").style.display="none";
    
}