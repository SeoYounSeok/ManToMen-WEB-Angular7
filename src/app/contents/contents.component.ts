import { Component, OnInit } from '@angular/core';
import {DataService} from './../services/data.service';
import { Router, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css']
})
export class ContentsComponent implements OnInit {
  information:Content[];

  constructor(private dataService:DataService , public router: Router) { }

  ngOnInit() {
    console.log('contents.component.ts : ngOnInt');
    this.dataService.getContents().subscribe((information)=>{
      // [] 를 붙여줘야 array 형식으로 받아 이게 오브젝트 형식이면 안됩니다. 
      
      if(information != 0 ){
      this.information =information;     
   
      }
      else {
        alert("서버 전송 오류");
      }
    });
 }
 onSelected(detail){
  localStorage.setItem('detail',detail);
  this.router.navigate(['contentsdetail']);
  
} 
Programming(){
  const categorysearch = "programming";
  localStorage.setItem('categorysearch',categorysearch);
  this.router.navigate(['searchcategory']);
}
Design(){
  const categorysearch = "design";
  localStorage.setItem('categorysearch',categorysearch);
  this.router.navigate(['searchcategory']);
}
Language(){
  const categorysearch = "language";
  localStorage.setItem('categorysearch',categorysearch);
  this.router.navigate(['searchcategory']);
}
Music(){
  const categorysearch = "music";
  localStorage.setItem('categorysearch',categorysearch);
  this.router.navigate(['searchcategory']);
}
Beauty(){
  const categorysearch = "beauty";
  localStorage.setItem('categorysearch',categorysearch);
  this.router.navigate(['searchcategory']);
}
ETC(){
  const categorysearch = "etc";
  localStorage.setItem('categorysearch',categorysearch);
  this.router.navigate(['searchcategory']);
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
