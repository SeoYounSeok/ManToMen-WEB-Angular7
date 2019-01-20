import { Component, OnInit } from '@angular/core';
import { DataService } from './../services/data.service';
import { Router, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  constructor(private dataService: DataService, public router: Router) { }

  ngOnInit() {

    const ReportID = localStorage.getItem('ReportID');
    const ReportClassName = localStorage.getItem('ReportClassName');
    document.getElementById("reportmemo").style.display="none";
    console.log(ReportID, ReportClassName);
  }

  onETC(num){
    if(num==1){
    document.getElementById("reportmemo").style.display="inline-block";
    }
    else{
      document.getElementById("reportmemo").style.display="none";
    }
  }
  ReportService(event) {
    event.preventDefault()
    function getRadioValue(theRadioGroup) {
      for (let i = 0, l = theRadioGroup.length; i < l; i++) {
        if (theRadioGroup[i].checked) {
          return theRadioGroup[i].value;
        }
      }
    }
    const radioButton= document.getElementsByName('test')
    const ReportReason = getRadioValue(radioButton)
    
  }
}
