import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-tutoradmin',
  templateUrl: './tutoradmin.component.html',
  styleUrls: ['./tutoradmin.component.css']
})
export class TutoradminComponent implements OnInit {
  addtutors:Addtutor[];
  constructor(private dataService:DataService , public router: Router) { }

  ngOnInit() {
    console.log('useradmin.component.ts : ngOnInt');
    this.dataService.getTutormanage().subscribe((addtutors)=>{
      // [] 를 붙여줘야 array 형식으로 받아 이게 오브젝트 형식이면 안됩니다. 
     
      this.addtutors =addtutors;     

    });
  }

  onDetail(addID, addClass){
    localStorage.setItem('addID',addID);
    localStorage.setItem('addClass',addClass);
    this.router.navigate(['tutordetail']);
  }

}



// 가져올 변수들 정보 총 19개 (맞는지 확인 부탁)
interface Addtutor{
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
