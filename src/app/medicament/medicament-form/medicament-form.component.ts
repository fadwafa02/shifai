// Importations inchangées...
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { addMedicament } from 'src/firebaseConfig'; 
import { Component, NgModule } from '@angular/core';


@Component({
  selector: 'app-medicament-form',
  templateUrl: 'medicament-form.component.html',
  styleUrls: ['medicament-form.component.scss']
})

export class MedicamentFormComponent {

  medicament: any = {
    nom: '',
    dosage: 0,
    frequence: [false, false, false]
  };

  constructor(private firestore: AngularFirestore) {}

  onSubmit() {
    // Ajouter les données à Firestore en utilisant la méthode dans firebaseConfig
    addMedicament({
      nom: this.medicament.nom,
      dosage: this.medicament.dosage,
      frequence: this.medicament.frequence,
    })
    .then((docRef) => {
      console.log('Document added with ID: ', docRef.id);
      // Réinitialiser le formulaire ou effectuer d'autres actions après l'ajout réussi
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
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