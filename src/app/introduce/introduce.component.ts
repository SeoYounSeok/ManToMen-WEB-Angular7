import { Component, OnInit } from '@angular/core';
import { DataService } from './../services/data.service';
import { Router, NavigationExtras } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-introduce',
  templateUrl: './introduce.component.html',
  styleUrls: ['./introduce.component.css']
})
export class IntroduceComponent implements OnInit {
  constructor(private dataService: DataService, public router: Router, private http: HttpClient) {

  }

  ngOnInit() {
    console.log('adminUser.component.ts : ngOnInt');
  }
  onDelete(DeleteID){
    localStorage.setItem('DeleteID',DeleteID);

    alert('user is delete');
  }

}

