import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-useradmin',
  templateUrl: './useradmin.component.html',
  styleUrls: ['./useradmin.component.css']
})
export class UseradminComponent implements OnInit {
  admins: Admin[];
  change: Admin[];
  constructor(private dataService: DataService, public router: Router) { }

  ngOnInit() {
    console.log('useradmin.component.ts : ngOnInt');
    this.dataService.getAdmin().subscribe((admins) => {
      console.log(admins);  // for testing if works on console 
      if (admins != 0) {
        this.admins = admins;
        console.log('모든 오브젝트 값 확인: ' + admins);
      }
      else {
        alert("서버 에러 발생");
      }
    });
  }
  onDelete(DeleteID) {
    localStorage.setItem('DeleteID', DeleteID);
    console.log("삭제될 아이디는 : " + localStorage.getItem('DeleteID'));
    console.log('useradmin.component.ts : ngOnInt');
    const DeleteuserID = localStorage.getItem('DeleteID');
    if (confirm("회원 정지를 신청하시겠습니까??") == true) {
      this.dataService.getUserDelete(DeleteuserID).subscribe((admins) => {
        console.log(admins);  // for testing if works on console 
        if (admins != 0) {
          this.admins = admins;
          console.log('모든 오브젝트 값 확인: ' + admins);
          alert("정지 처리되었습니다.");
        }
        else {
          alert("서버 에러 발생");
        }
      });
      this.router.navigate(['']);

    }
    else {
      alert("취소하셨습니다.");
      this.router.navigate(['useradmin']);
    }
  }

  onPointchange(ChangeID) {
    localStorage.setItem('ChangeID', ChangeID);
    console.log("삭제될 아이디는 : " + localStorage.getItem('ChangeID'));
    console.log('useradmin.component.ts : ngOnInt');
    if (confirm("사용자 포인트 수정 페이지로 이동하시겠습니까? 관리자의 경우에만 사용이 가능합니다.") == true) {
      const admincheck = prompt("Admin 비밀번호를 입력해주세요", "");
      if (admincheck == '4444') {
        alert("비밀번호가 일치합니다.");
        this.router.navigate(['userdetail']);
      }
      else {
        alert("경고 다시 시도 해주세요.");
      }
    }
    else {
      alert("취소하셨습니다.");
      this.router.navigate(['useradmin']);
    }

  }

  onIdentitychange(onuserID,onuserIdentity){
    localStorage.setItem('onuserID',onuserID);
    localStorage.setItem('onuserIdentity',onuserIdentity);
    const changeuserID = localStorage.getItem('onuserID');
    const  changeuserIdentity = localStorage.getItem('onuserIdentity');
    console.log("onuserID= " + onuserID + "onuserIdentity= " + onuserIdentity);
    
    if (confirm("사용자 직무 변경을 하시겠습니까?") == true) {
      this.dataService.getIdentitychange(changeuserID,changeuserIdentity).subscribe((change) => {
        console.log(change);  // for testing if works on console 
        if (change != 0) {
          this.change = change;
          console.log('모든 오브젝트 값 확인: ' + change);
        }
        else {
          alert("서버 에러 발생");
        }
      });
      alert("변경 요청 승인 처리 되었습니다.");
      window.location.reload();
    }
    else{
      alert("취소하셨습니다.");
    }

  }
}
interface Admin {
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
  userPoint: string
}
