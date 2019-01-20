import { Component, OnInit } from '@angular/core';
import {DataService} from './../services/data.service';
import { Router, NavigationExtras } from '@angular/router';



@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.css']
})
export class SearchpageComponent implements OnInit {
  searchinfo:Content[];
  constructor(private dataService:DataService , public router: Router) { }

  ngOnInit() {
    console.log('contents.component.ts : ngOnInt');
    const userSearch = localStorage.getItem('userSearch');
    this.dataService.getSearch(userSearch).subscribe((searchinfo)=>{
      // [] 를 붙여줘야 array 형식으로 받아 이게 오브젝트 형식이면 안됩니다. 
      this.searchinfo =searchinfo;     
      console.log("콘텐츠 정보들을 가져와 봅시다." + this.searchinfo);
      if(searchinfo == 0){
        alert("검색 결과가 없습니다.");
      }
    });
 }
 onSelected(detail){
  localStorage.setItem('detail',detail);
  console.log(detail);
  this.router.navigate(['contentsdetail']);
  console.log("Search 기능을 사용중입니다."); 
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
