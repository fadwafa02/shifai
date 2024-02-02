import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {  ToastController } from '@ionic/angular';
import { loginMedecin, medecinUid } from 'src/firebaseConfig';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-medecin',
  templateUrl: './login-medecin.page.html',
  styleUrls: ['./login-medecin.page.scss'],
})

export class LoginMedecinPage implements OnInit {

  email: string = '';
  password: string = '';
  navCtrl: any;


  constructor(private toastController: ToastController, private firestore: AngularFirestore, private router: Router) { }


  async onLoginMedecin() {
    try {
      const result = await loginMedecin(this.firestore, this.email, this.password);
      if (result) {
        const { uid } = result;
        console.log('Login successful! Navigating to homemedecin page...');
        console.log('Medecin UID:', uid);

        // Affectez la valeur de l'UID à la variable exportable medecinUid
        medecinUid.uid = uid;

        this.router.navigate(['/app-medecin']);
      } else {
        console.log('Login failed. Handle failure actions.');
      }
    } catch (error) {
      console.error('Erreur lors de la connexion du médecin :', error);
    }
  }

  back() {
    this.navCtrl.navigateForward('/homemedecin');
  }
  loginUser(){
    
  }

  ngOnInit() {
  }

}

