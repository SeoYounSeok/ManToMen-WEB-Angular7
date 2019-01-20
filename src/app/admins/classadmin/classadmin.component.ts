import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import { Router, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-classadmin',
  templateUrl: './classadmin.component.html',
  styleUrls: ['./classadmin.component.css']
})
export class ClassadminComponent implements OnInit {
  classadmins:Content[];
  constructor(private dataService:DataService , public router: Router) { }

  ngOnInit() {
    this.dataService.getContents().subscribe((classadmins)=>{
      // [] 를 붙여줘야 array 형식으로 받아 이게 오브젝트 형식이면 안됩니다. 
      if(classadmins != 0 ){
      this.classadmins =classadmins;     
      }
      else {
        alert("서버 전송 오류");
      }
    });
  }


  onDelete(DeleteClassName,DeleteuserID){
    localStorage.setItem('DeleteuserID', DeleteuserID);
    localStorage.setItem('DeleteClassName',DeleteClassName);
    console.log('classadmin.component.ts : ngOnInt');
    const DeleteClass = localStorage.getItem('DeleteClassName');
    const Deleteuser = localStorage.getItem('DeleteuserID');
    if (confirm("클래스 삭제를 신청하시겠습니까??") == true) {  
    this.dataService.getClassDelete(Deleteuser,DeleteClass).subscribe((admins)=>{
      console.log(admins);  // for testing if works on console 
      if(admins != 0){
        
      //this.admins = admins;
      
      alert("정지 처리되었습니다.");
    }
    else{
      alert("서버 에러 발생");
    }
    });
    this.router.navigate(['']);
    
  }
  else{
    alert("취소하셨습니다.");
    this.router.navigate(['classadmin']);
  }
  }


}

// 가져올 변수들 정보 총 19개 (맞는지 확인 부탁)
interface Content{
  ClassPicture:string,
  ClassName:string,
  ClassTutorID:string,
  ClassCategory:string,
  ClassTotalPeople:string,
  ClassCurrentPeople:string,
  ClassTutorIntro:string,
  ClassIntro:string,
  ClassWhom:string,
  ClassContents:string,
  ClassPrice:string,
  ClassHour:string,
  ClassNumberOfTime:string,
  ClassPlace:string,
  ClassPlaceDetail:string,
  ClassWeek:string,
  ClassTime:string,
  ClassFirstTime:string,
  userPhoneNumber:string
}

