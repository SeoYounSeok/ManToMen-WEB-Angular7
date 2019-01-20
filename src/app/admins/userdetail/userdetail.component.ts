import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { DataService } from '../../services/data.service';




@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {

  constructor(public router: Router, private dataService: DataService) { }

  ngOnInit() {
  }

  ChangePoint(event){
    event.preventDefault()
    const target = event.target
    const u_point= target.querySelector('#PointContents').value;
    const ChangeID = localStorage.getItem('ChangeID');
    this.dataService.getPointchange(ChangeID,u_point).subscribe((data)=>{
      // [] 를 붙여줘야 array 형식으로 받아 이게 오브젝트 형식이면 안됩니다. 
    });
    this.router.navigate(['useradmin']);
  }
}
