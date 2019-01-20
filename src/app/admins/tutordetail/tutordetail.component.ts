import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-tutordetail',
  templateUrl: './tutordetail.component.html',
  styleUrls: ['./tutordetail.component.css']
})
export class TutordetailComponent implements OnInit {
  informationss:Content[];
  accepts:Content[];
  denys:Content[];
  constructor(private dataService:DataService , public router: Router) { }

  ngOnInit() {

    const ClassName=localStorage.getItem('addClass')
    const ClassTutorID = localStorage.getItem('addID')
   
    this.dataService.getContentsDetail(ClassName).subscribe((informationss)=>{
    console.log(informationss);
    if(informationss != 0){
    this.informationss =informationss; 
    }
    else{
      alert("서버 요청 오류");
    }
  });

  }

  AcceptTutor(event) {
    event.preventDefault( )
    const ClassName=localStorage.getItem('addClass')
    const ClassTutorID = localStorage.getItem('addID')
    this.dataService.getAccepttutor(ClassTutorID,ClassName).subscribe((accepts)=>{
      // [] 를 붙여줘야 array 형식으로 받아 이게 오브젝트 형식이면 안됩니다. 
      console.log(accepts);
      if(accepts == 1){
      this.accepts=accepts;
      alert("해당 사용자의 튜터 신청이 완료되었습니다.");
      }
      else{
        alert("서버 요청 오류");
      }
    });

    this.router.navigate(['useradmin']);
  }
  DenyTutor(event){
    const ClassName=localStorage.getItem('addClass')
    event.preventDefault( )
    this.dataService.getDenytutor(ClassName).subscribe((denys)=>{
      // [] 를 붙여줘야 array 형식으로 받아 이게 오브젝트 형식이면 안됩니다. 
      console.log(denys);
      if(denys == 1){
      this.denys=denys;
      alert("해당 사용자의 튜터 거절을 선택하셨습니다.");
     }
     else{
       alert("서버 요청 오류");
     }
    });

    this.router.navigate(['useradmin']);
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