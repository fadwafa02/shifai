import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AddUser, app } from  'src/firebaseConfig';
import { ToastController } from '@ionic/angular';





@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})

export class SignupPage implements OnInit {
  
 
  familyName = "";
  name = "";
  email = "";
  password = "";
  date = "";
  sexe = "";
  constructor(private firestore: AngularFirestore, private toastController: ToastController) { }

  ngOnInit() {
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position: 'bottom',
    });
    toast.present();
  }

  async AddUser() {

try{
    // Utilisez la fonction AddUser du fichier firebaseConfig avec les paramètres du formulaire
    AddUser(this.firestore,app ,this.familyName, this.name, this.email, this.password, this.date, this.sexe);
    this.presentToast('Registration successful!');
    // Réinitialisez les valeurs du formulaire après l'ajout réussi
    this.familyName = '';
    this.name = '';
    this.email = '';
    this.password = '';
    this.date = '';
    this.sexe = '';
  }
  catch(error){
    console.log('Error during registration:', error);
  }

  }

 
}
  
  



