// Importations inchangées...
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController, ToastController } from '@ionic/angular';
import { AddMedicament, app } from  'src/firebaseConfig';
import { Component, NgModule } from '@angular/core';
import { userUid } from 'src/app/login/login.page';
import { EventService } from 'src/app/event.service';





@Component({
  selector: 'app-medicament-form',
  templateUrl: 'medicament-form.component.html',
  styleUrls: ['medicament-form.component.scss']
})




export class MedicamentFormComponent {

    uid = userUid;
    nom= '';
    dosage= 0;
    prises = [{ label: 'Matin', checked: false },{ label: 'Midi', checked: false },{ label: 'Soir', checked: false }];

    

  constructor(private firestore: AngularFirestore, private toastController: ToastController, private modalController: ModalController, private eventService: EventService) {}

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
      if (typeof this.uid === 'string') {
      await AddMedicament(this.firestore, app, this.nom, this.dosage, this.prises, this.uid);
       // Déclencher l'événement de mise à jour des médicaments
       this.eventService.triggerMedicamentUpdated();
      this.presentToast('Médicament ajouté avec succès!');
      // Réinitialisez les valeurs du formulaire après l'ajout réussi
      this.nom = '';
      this.dosage = 0;
      this.prises = [
        { label: 'Matin', checked: false },
        { label: 'Midi', checked: false },
        { label: 'Soir', checked: false }
      ];
      this.modalController.dismiss();
    }else{
      console.log('uid non string');
    }
    } catch (error) {
      console.log('Erreur lors de l\'ajout du médicament:', error);
    }
  }




}

// Dans un fichier approprié, par exemple medicament.model.ts
export interface Medicament {
  nom: string;
  dosage: number;
  prise: { label: string; checked: boolean }[];
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
