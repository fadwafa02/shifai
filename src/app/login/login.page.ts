// login.page.ts

import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
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




  constructor(private navCtrl: NavController, private toastController: ToastController) { }

 
  async loginUser() {
    try {
      const userCredential = await loginUser(this.email, this.password);
      const user = userCredential.user;
      if (user) {
        const uid = user.uid;
        userUid = uid;
        console.log('UID de l\'utilisateur connecté :', uid);
        this.navCtrl.navigateForward('tabs/tab1');
      } else {
        this.presentToast('Identifiants invalides');// Gérez les erreurs d'authentification ici (par exemple, affichez un message à l'utilisateur)
      }
    } catch (error) {
      console.log('Error during login:', error);
      
      // Affichez un message à l'utilisateur pour l'informer de l'erreur
    }
  }
  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position: 'bottom',
    });
    toast.present();
  }
  back() {
    this.navCtrl.navigateForward('/home');
  }

  ngOnInit() {
  }
}
export let userUid: string ;

