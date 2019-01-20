import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { DataService } from './../services/data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  message: string;
  username: String;
  password: String;


  constructor(private cs: CookieService, private dataService: DataService, public router: Router) {
  }
  ngOnInit() {

  }



  onLoginSubmit(event) {

    event.preventDefault()
    const target = event.target
    const userID = target.querySelector('#userID').value
    const userPassword = target.querySelector('#userPassword').value
    
    this.dataService.authenticateUser(userID, userPassword).subscribe(data => {
     
      if (data != 0) {
        localStorage.setItem('userID', userID);
        document.getElementById('mlogin').style.display = "none"
        document.getElementById('mregister').style.display = "none"
        //mlogin 
        document.getElementById('mlogout').style.display = "inline-block"
        document.getElementById('mmypage').style.display = "inline-block"
       
        this.dataService.storeUserData(data.token, data.user);
        
        alert(this.cs.get('user'));
        const cookies = this.cs.get('user');
        localStorage.setItem('cookies', cookies);
      
        this.router.navigate(['']);
        //userID 가 admin 일 때, 관리자 홈페이지로 이동.! 
        if (userID == 'admin') {
          document.getElementById('puseradmin').style.display = "inline-block"
          //useradmin => 관리자 전용으로 변경
        }
        else {
          document.getElementById('puseradmin').style.display = "none"
        }

      } else {
        alert('아이디와 비밀번호를 확인해주세요.');
      
        this.router.navigate(['login']);
      }
    });
  }

}

  //loginUser(event){
  //  event.preventDefault( )
  //  const target = event.target
  //  const userID = target.querySelector('#userID').value
  //  const userPassword = target.querySelector('#userPassword').value

  // this.Auth.getUserDetails(userID,userPassword)
  //  console.log(userID, userPassword)
  //  if(userID =='admin' && userPassword =='admin'){
  //   this.router.navigate(['admin']);

   // }
   //  }

