import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

import { DataService } from './../services/data.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {



  constructor(public router: Router, private dataService: DataService) {

  }

  ngOnInit() {
  
    }
}