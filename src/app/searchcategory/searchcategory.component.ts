import { Component, OnInit } from '@angular/core';
import {DataService} from './../services/data.service';
import { Router, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-searchcategory',
  templateUrl: './searchcategory.component.html',
  styleUrls: ['./searchcategory.component.css']
})
export class SearchcategoryComponent implements OnInit {
  searchcate:Content[];
  constructor(private dataService:DataService , public router: Router) { }

  ngOnInit() {
    console.log('contents.component.ts : ngOnInt');
    const categorysearch = localStorage.getItem('categorysearch');
    this.dataService.getCategorySearch(categorysearch).subscribe((searchcate)=>{
      // [] 를 붙여줘야 array 형식으로 받아 이게 오브젝트 형식이면 안됩니다. 
      this.searchcate =searchcate;     
      console.log("콘텐츠 정보들을 가져와 봅시다." + this.searchcate);
      if(searchcate == 0){
        alert("검색 결과가 없습니다");
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
