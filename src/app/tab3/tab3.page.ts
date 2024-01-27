import { Component } from '@angular/core';
import { userUid } from 'src/app/login/login.page';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {



  uid: string = userUid ;

  
  constructor() {}

}
