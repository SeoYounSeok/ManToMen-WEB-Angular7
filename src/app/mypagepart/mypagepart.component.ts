import { Component, OnInit } from '@angular/core';
import { DataService } from './../services/data.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-mypagepart',
  templateUrl: './mypagepart.component.html',
  styleUrls: ['./mypagepart.component.css']
})
export class MypagepartComponent implements OnInit {
  mypartinformation:Mypartclass[];
  constructor(private dataService: DataService, public router: Router) { }

  ngOnInit() {
    const partID = localStorage.getItem('userID');
    this.dataService.getParticipation(partID).subscribe((mypartinformation) => {
      if(mypartinformation != 0){
      this.mypartinformation = mypartinformation;

    }
      else {
        alert(mypartinformation);
      }
    });

  }

}




interface Mypartclass{
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
