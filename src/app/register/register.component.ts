import { Component, OnInit }        from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { RauthService }      from '../rauth.service';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import { AuthService }      from '../auth.service';
import {DataService} from './../services/data.service';
@Component({

  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  
})
export class RegisterComponent implements OnInit {
  message: string;
  rands:Rand[];
  enumber: number;

  constructor(private dataService:DataService, public Rauth: RauthService, public router: Router) {
   }

   ngOnInit() {
    this.enumber = 0;
    verification(1)
    sucverification(1)
    failverification(1)  
    
  }
 

  public Emailsecurity(event){
    alert("인증번호를 전송했습니다.")
    event.preventDefault( )
    const target = event.target
    const userEmail = target.querySelector('#userEmail').value
    this.dataService.getEmailDetail(userEmail).subscribe((rands)=>{
    this.rands = [rands];
    console.log(rands);  // for testing if works on console 
    const rnumber = rands.rand;
    localStorage.setItem('rnumber',rnumber)
    });
    verification(0)
    sucverification(1)
    failverification(1)
  }
  TwoEmailsecurity(event){
    event.preventDefault( )
    const target = event.target
    const twouserEmail = target.querySelector('#twouserEmail').value
    localStorage.getItem('rnumber')
    if (localStorage.getItem('rnumber') == twouserEmail){
      verification(1);
      sucverification(0);
      failverification(1);
      this.enumber = 1;
    }
    else {
      verification(1);
      sucverification(1);
      failverification(0);
    }
     
  }

// RegisterUser Form 형식에서 사용가능합니다.

  RegisterUser(event)
  {
    console.log(this.enumber);
    event.preventDefault( )
    function getRadioValue(theRadioGroup) {
      for (let i = 0, l = theRadioGroup.length; i < l; i++) {
        if (theRadioGroup[i].checked) {
          return theRadioGroup[i].value;
        }
      }
    }
    function getCheckBox(theCheckBox) {
      var check ='';
      for (let i = 0, l = theCheckBox.length; i < l; i++) {
        if (theCheckBox[i].checked) {
          
          check += theCheckBox[i].value +"//";      
                
        }
      }
      return check;
    }

    const checkbox = document.getElementsByName('userCategory')
    const userCategory = getCheckBox(checkbox)
    const radioButton= document.getElementsByName('test')
    const userGender = getRadioValue(radioButton)
    const target = event.target
    const userID = target.querySelector('#userID').value
    const userPassword = target.querySelector('#userPassword').value
    const userEmail = target.querySelector('#userEmail').value
    const userName = target.querySelector('#userName').value
    const userAge = target.querySelector('#userAge').value
    const userIdentity = "Tutee"
    const userParticipateClass = null
    const userOperateClass = null
    // if 문 만들어서 이제 1 값아니면 안돌아가게 하기 ..
    if(this.enumber == 1){
    this.Rauth.getRegister(userID, userPassword, userEmail, userName, userAge, userGender, userCategory, userIdentity, userParticipateClass, userOperateClass)
    console.log(userID, userPassword, userEmail, userName, userAge, userGender, userCategory, userIdentity, userParticipateClass, userOperateClass)
    }
    else
      Emailalert(this.enumber);
  
  }
}

// 인증 번호 나타나기 나타내지 않기 분리 해놓은 것 !!

function verification(num)
{
    if(num==0)
    document.getElementById("verification").style.display="block";
    else
    document.getElementById("verification").style.display="none";
    
}
function sucverification(num)
{
    if(num==0)
    document.getElementById("sucverification").style.display="block";
    else
    document.getElementById("sucverification").style.display="none";
    
}

function failverification(num)
{
    if(num==0)
    document.getElementById("failverification").style.display="block";
    else
    document.getElementById("failverification").style.display="none";
    
}

function Emailalert(enumber)
{
    if(enumber==0)
    alert("이메일 인증을 해주세요.");
    else
    return;
}

interface Rand{
  rand:String
}