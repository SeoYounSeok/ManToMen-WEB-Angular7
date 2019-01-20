import { Component, OnInit } from '@angular/core';
import { DataService } from './../services/data.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-contentsdetail',
  templateUrl: './contentsdetail.component.html',
  styleUrls: ['./contentsdetail.component.css']
})
export class ContentsdetailComponent implements OnInit {
  informations:Content[];
  applyres:Content[];

  constructor(private dataService: DataService, public router: Router) { }

  ngOnInit() {
    const ClassNamed = localStorage.getItem('detail')

    this.dataService.getContentsDetail(ClassNamed).subscribe((informations) => {
      console.log(informations);
      if( informations != 0){
      this.informations = informations;
     
      const ClassName = informations.ClassName;
      localStorage.setItem('RClassName',ClassName);
    }
    else{
      alert("서버 오류 발생");
    }
    });

  }

  onApply(testapply,ClassScore){
    localStorage.setItem('ClassScore',ClassScore);
    localStorage.setItem('testapply',testapply);
    
    const userID = localStorage.getItem('userID');
    const ClassName = localStorage.getItem('testapply');
   
    this.dataService.getClassApply(userID,ClassName).subscribe(applyres=>{ 
      if(applyres == 1) {
        this.applyres= applyres;
        
        this.router.navigate(['']);
        
        alert("신청 완료되었습니다.");
      }
      else{
        console.log(applyres);
        alert(applyres);
      }
    });
   
  }

}


// 가져올 변수들 정보 총 19개 (맞는지 확인 부탁)
interface Content{
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
  ClassScore: string
}
