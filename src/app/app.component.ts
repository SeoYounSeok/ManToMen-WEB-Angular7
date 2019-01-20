import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router, NavigationExtras } from '@angular/router';
import { DataService } from './services/data.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})

export class AppComponent {
  title = 'MAIN PAGE ..?';
  authToken: any;
  user: any;

  constructor(private dataService: DataService, public Auth: AuthService, private cs: CookieService, public router: Router) { }

  ngOnInit() {
    const checking = localStorage.getItem('cookies');
    const userID = localStorage.getItem('userID');
    if( checking != null){
      document.getElementById('mlogin').style.display = "none"
      document.getElementById('mregister').style.display = "none"
      document.getElementById('mlogout').style.display = "inline-block"
      document.getElementById('mmypage').style.display = "inline-block"
      

      if (userID == 'admin') {
        document.getElementById('puseradmin').style.display = "inline-block"
        //useradmin => 관리자 전용으로 변경
      }
      else {
        document.getElementById('puseradmin').style.display = "none"
      }
    }
    else{
      document.getElementById('mlogin').style.display = "inline-block"
      document.getElementById('mregister').style.display = "inline-block"
      document.getElementById('mlogout').style.display = "none"
      document.getElementById('mmypage').style.display = "none"
     
      document.getElementById('puseradmin').style.display = "none"
    }
  }
  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  onLogoutClick() {
    this.cs.deleteAll('user');
    this.dataService.logout();
  
    document.getElementById('mlogin').style.display = "inline-block"
    document.getElementById('mregister').style.display = "inline-block"
    //mlogin 
    document.getElementById('mlogout').style.display = "none"
    document.getElementById('mmypage').style.display = "none"
    alert(this.cs.deleteAll('user'));
    this.router.navigate(['login']);
    return false;
  }


  Searchinfo(event){
    event.preventDefault( )
    //Single page 변환 x
    const target = event.target
    const userSearch = target.querySelector('#userSearch').value  
    localStorage.setItem('userSearch',userSearch);
    
    this.router.navigate(['searchpage']);
    //window.location.reload();
    // 이 부분에 reload 하는 부분인데...에러가 나는지 확인해줘야해요.. ㅠㅠ..
  }
}








