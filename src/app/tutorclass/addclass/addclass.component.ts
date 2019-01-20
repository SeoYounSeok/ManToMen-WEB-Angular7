import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addclass',
  templateUrl: './addclass.component.html',
  styleUrls: ['./addclass.component.css']
})
export class AddclassComponent implements OnInit {

  constructor(private dataService: DataService, public router: Router) { }

  ngOnInit() {
  }


  Addclasses(event) {
    event.preventDefault()
    function getRadioValue(theRadioGroup) {
      for (let i = 0, l = theRadioGroup.length; i < l; i++) {
        if (theRadioGroup[i].checked) {
          return theRadioGroup[i].value;
        }
      }
    }
    function getCheckBox(theCheckBox) {
      var check = '';
      for (let i = 0, l = theCheckBox.length; i < l; i++) {
        if (theCheckBox[i].checked) {

          check += theCheckBox[i].value + "//";

        }
      }
      return check;
    }
    const target = event.target
    const checkbox = document.getElementsByName('ClassWeek')
    const ClassName = target.querySelector('#ClassName').value
    const ClassTutorID = localStorage.getItem('userID');
    const ClassCategory = target.querySelector('#ClassCategory').value
    const ClassTotalPeople = target.querySelector('#ClassTotalPeople').value
    const ClassTutorIntro = target.querySelector('#ClassTutorIntro').value
    const ClassIntro = target.querySelector('#ClassIntro').value
    const ClassWhom = target.querySelector('#ClassWhom').value
    const ClassContents = target.querySelector('#ClassContents').value
    const ClassPrice = target.querySelector('#ClassPrice').value
    const ClassHour = target.querySelector('#ClassHour').value
    const ClassNumberOfTime = target.querySelector('#ClassNumberOfTime').value
    const ClassPlace = target.querySelector('#ClassPlace').value
    const ClassPlaceDetail = target.querySelector('#ClassPlaceDetail').value
    const ClassWeek = getCheckBox(checkbox)
    const ClassTime = target.querySelector('#ClassTime').value
    const ClassFirstTime = target.querySelector('#ClassFirstTime').value
    const userPhoneNumber = localStorage.getItem('userPhoneNumber')

    console.log("getAddclass 값을 보내기 전 값 " + ClassName, ClassTutorID, ClassCategory, ClassTotalPeople, ClassTutorIntro, ClassIntro, ClassWhom, ClassContents, ClassPrice,
      ClassHour, ClassNumberOfTime, ClassPlace, ClassPlaceDetail, ClassWeek, ClassTime, ClassFirstTime, userPhoneNumber);

    this.dataService.getAddclass(ClassName, ClassTutorID, ClassCategory, ClassTotalPeople, ClassTutorIntro, ClassIntro, ClassWhom, ClassContents, ClassPrice,
      ClassHour, ClassNumberOfTime, ClassPlace, ClassPlaceDetail, ClassWeek, ClassTime, ClassFirstTime, userPhoneNumber).subscribe((posts) => {
        console.log("getAddclass 값을 보낸후 값 " + ClassName, ClassTutorID, ClassCategory, ClassTotalPeople, ClassTutorIntro, ClassIntro, ClassWhom, ClassContents, ClassPrice,
          ClassHour, ClassNumberOfTime, ClassPlace, ClassPlaceDetail, ClassWeek, ClassTime, ClassFirstTime, userPhoneNumber);
          if(posts != 0){
            console.log(posts);
            this.router.navigate(['introduce']);
            alert("튜터 등록 대기중 상태입니다.");
          }
          else{
            console.log(posts);
            alert("튜터 등록에 실패하셨습니다.");
            this.router.navigate(['addtutor']);

          }
      });

  }

}
