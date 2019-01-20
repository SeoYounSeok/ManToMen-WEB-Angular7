import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {

  }

  onGoing() {
    const cookies = localStorage.getItem('cookies');
    if (cookies == null) {
    
      this.router.navigate(['register']);
    }
    else {
      
      this.router.navigate(['contents']);
    }
  }
  onSupport() {
    const cookies = localStorage.getItem('cookies');
    if (cookies == null) {
      
      this.router.navigate(['register']);
    }
    else {
      
      this.router.navigate(['addtutor']);
    }
  }
}
