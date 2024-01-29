import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login-medecin',
  templateUrl: './login-medecin.page.html',
  styleUrls: ['./login-medecin.page.scss'],
})
export class LoginMedecinPage implements OnInit {

  email: string = '';
  password: string = '';
  navCtrl: any;


  constructor(private toastController: ToastController) { }

  back() {
    this.navCtrl.navigateForward('/homemedecin');
  }
  loginUser(){
    
  }

  ngOnInit() {
  }

}
