import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-addreview',
  templateUrl: './addreview.component.html',
  styleUrls: ['./addreview.component.css']
})
export class AddreviewComponent implements OnInit {
  reviewed: Reviewed[];
  constructor(private dataService:DataService , public router: Router) { }

  ngOnInit() {

  }

  AddReviews(event){
    event.preventDefault( )
    function getRadioValue(theRadioGroup) {
      for (let i = 0, l = theRadioGroup.length; i < l; i++) {
        if (theRadioGroup[i].checked) {
          return theRadioGroup[i].value;
        }
      }
    }
    const target = event.target
    const radioButton= document.getElementsByName('test')
    const ReviewScore = getRadioValue(radioButton)
    const ReviewContents= target.querySelector('#ReviewContents').value;
    const ReviewuserID = localStorage.getItem('userID')
    const ReviewClassName = localStorage.getItem('detail')
    const Time = new Date();
    const year = Time.getFullYear();
    const mouth = Time.getMonth()+1;
    const day = Time.getDate();
    const ReviewDate = year + '-' + mouth + '-' + day;
    localStorage.setItem('ReviewDate',ReviewDate);
    console.log(ReviewContents,ReviewScore,ReviewDate,ReviewuserID,ReviewClassName);
    // 여기서 값을 안받아와요 그렇기 때문에 오류가 나면 이 부분이라고 생각을 하시면 됩니다.
    this.dataService.getReviewInsert(ReviewClassName,ReviewuserID,ReviewContents,ReviewDate,ReviewScore).subscribe((reviewed)=>{
      // [] 를 붙여줘야 array 형식으로 받아 이게 오브젝트 형식이면 안됩니다. 
      if( reviewed != 0){
      this.reviewed =reviewed;     
      console.log("생성되었는지 꼭 확인하세요")
      console.log("리뷰 reviewed 값입니다..." + this.reviewed);
      alert("리뷰 등록이 완료되었습니다.");
      this.router.navigate(['reviewmain']);
      }
      else{
        alert(reviewed);
        this.router.navigate(['reviewmain']);
      }
    });
    
   

    }

}

interface Reviewed{
  ReviewClassName:string,
  ReviewuserID:string,
  ReviewContents:string,
  ReviewDate:string,
  ReviewScore:string
}
