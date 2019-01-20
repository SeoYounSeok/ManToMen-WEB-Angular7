import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import { Router, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-reviewmain',
  templateUrl: './reviewmain.component.html',
  styleUrls: ['./reviewmain.component.css']
})
export class ReviewmainComponent implements OnInit {
  informations:Content[];
  reviews: Reviews[];
  constructor(private dataService:DataService , public router: Router) { }

  ngOnInit() {
    const Classnamed = localStorage.getItem('detail')
    this.dataService.getContentsDetail(Classnamed).subscribe((informations) => {
      console.log(informations);
      if( informations != 0){
      this.informations = informations;
    }
    else{
      alert(" Score 값 가져올 때 서버 오류 발생");
    }
    });
    this.dataService.getReview(Classnamed).subscribe((reviews) => {
      console.log(reviews);
      if(reviews != 0){
      this.reviews = reviews;
      console.log(this.reviews);
      
    }
    else {
      alert("리뷰 메인 불러올 때 서버 오류가 났습니다.");
    }
    });
  }
  onReport(RID,RCN){
    localStorage.setItem('ReportID',RID); 
    localStorage.setItem('ReportClassName', RCN);
    const ReportID = localStorage.getItem('ReportID');
    const ReportClassName = localStorage.getItem('ReportClassName');
    console.log(ReportID,ReportClassName);
    this.router.navigate(['report']);
  }

}

interface Reviews{
  ReviewClassName:string,
  ReviewuserID:string,
  ReviewContents:string,
  ReviewDate:string,
  ReviewScore:string,
}

interface Content{
  ClassScore: string
}
