// login.page.ts

import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { loginUser } from 'src/firebaseConfig'; // Assurez-vous que le chemin est correct
import { Tab1Page } from '../tab1/tab1.page';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = '';
  password: string = '';

  constructor(private navCtrl: NavController) { }

  async loginUser() {
    try {
      const success = await loginUser(this.email, this.password);
      if (success) {
        this.navCtrl.navigateForward('tabs/tab1');
      } else {
        // Gérez les erreurs d'authentification ici (par exemple, affichez un message à l'utilisateur)
      }
    } catch (error) {
      console.log('Error during login:', error);
      // Affichez un message à l'utilisateur pour l'informer de l'erreur
    }
  }
  back() {
    this.navCtrl.navigateForward('/home');
  }

  ngOnInit() {
  }
}
