import { Component, OnInit } from '@angular/core';
import { userUid } from 'src/app/login/login.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{


  uid: string = userUid ;
  

  constructor() {}

  ngOnInit() {
  }

}
