import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastController } from '@ionic/angular';
import { AddMedecin, app } from  'src/firebaseConfig';

@Component({
  selector: 'app-signup-medecin',
  templateUrl: './signup-medecin.page.html',
  styleUrls: ['./signup-medecin.page.scss'],
})
export class SignupMedecinPage implements OnInit {

  familyName = "";
  name = "";
  email = "";
  password = "";
  date = "";
  sexe = "";
  localisation = "";
  specialite = "";
  role = "medecin";

  constructor(private firestore: AngularFirestore, private toastController: ToastController) { }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position: 'bottom',
    });
    toast.present();
  }

  ngOnInit() {
  }

  async AddUser() {

    try{
        // Utilisez la fonction AddUser du fichier firebaseConfig avec les paramètres du formulaire
        AddMedecin(this.firestore,app ,this.familyName, this.name, this.email, this.password, this.date, this.sexe ,this.role, this.specialite,this.localisation);
        this.presentToast('Registration successful!');
        // Réinitialisez les valeurs du formulaire après l'ajout réussi
        this.familyName = '';
        this.name = '';
        this.email = '';
        this.password = '';
        this.localisation = '';
        this.specialite = '';
        this.date = '';
        this.sexe = '';
      }
      catch(error){
        console.log('Error during registration:', error);
      }
    
      }

}
