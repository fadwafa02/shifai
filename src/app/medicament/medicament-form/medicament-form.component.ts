// Importations inchangées...
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ToastController } from '@ionic/angular';
import { AddMedicament, app } from  'src/firebaseConfig';
import { Component, NgModule } from '@angular/core';


@Component({
  selector: 'app-medicament-form',
  templateUrl: 'medicament-form.component.html',
  styleUrls: ['medicament-form.component.scss']
})

export class MedicamentFormComponent {


    nom= '';
    dosage= 0;
    prise= [false, false, false];


  constructor(private firestore: AngularFirestore, private toastController: ToastController) {}

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position: 'bottom',
    });
    toast.present();
  }

  async addMedicament() {
    try {
      // Utilisez la fonction addMedicament avec les paramètres du formulaire
      AddMedicament(this.firestore, app, this.nom, this.dosage, this.prise);
      this.presentToast('Médicament ajouté avec succès!');
      // Réinitialisez les valeurs du formulaire après l'ajout réussi
      this.nom = '';
      this.dosage = 0;
      this.prise = [false, false, false];
    } catch (error) {
      console.log('Erreur lors de l\'ajout du médicament:', error);
    }
  }
}

@NgModule({
  declarations: [MedicamentFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  exports: [MedicamentFormComponent],
  providers: [AngularFirestore],
})
export class MedicamentFormModule {}
