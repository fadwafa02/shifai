import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getMedecinsByLocalisationAndSpecialite } from 'src/firebaseConfig';
import { userUid } from 'src/app/login/login.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {


  uid: string = userUid ;

  
  constructor() {}

  
  

}
