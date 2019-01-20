import { Component, OnInit } from '@angular/core';
import { DataService } from './../services/data.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-mypageclass',
  templateUrl: './mypageclass.component.html',
  styleUrls: ['./mypageclass.component.css']
})
export class MypageclassComponent implements OnInit {
  myinformation:Mypageclass[];
  constructor(private dataService: DataService, public router: Router) { }

  ngOnInit() {
    const myclass = localStorage.getItem('userID');
   
    this.dataService.getMypageClass(myclass).subscribe((myinformation) => {
      
      if(myinformation != 0){
      this.myinformation = myinformation;
      //생각을 해봅시다...
      //오류나면 Array 행렬 없어 졌습니다.
      }
      else {
        alert("운영중인 강의가 없습니다");
        this.router.navigate(['mypage']);
      }
    });
   }
  

}


interface Mypageclass{
  ClassPicture: string,
  ClassName: string,
  ClassTutorID: string,
  ClassCategory: string,
  ClassTotalPeople: string,
  ClassCurrentPeople: string,
  ClassTutorIntro: string,
  ClassIntro: string,
  ClassWhom: string,
  ClassContents: string,
  ClassPrice: string,
  ClassHour: string,
  ClassNumberOfTime: string,
  ClassPlace: string,
  ClassPlaceDetail: string,
  ClassWeek: string,
  ClassTime: string,
  ClassFirstTime: string,
  userPhoneNumber: string,
  ClassTuteeID: string
}
