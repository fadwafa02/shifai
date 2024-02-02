// formulaire.component.ts

import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter, NgModule } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { ajouterSecretaire } from 'src/firebaseConfig';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})




export class FormulaireComponent {
  @Output() formulaireSoumis = new EventEmitter<any>();
  @Output() fermerFormulaire = new EventEmitter<void>();

  myForm: FormGroup = this.fb.group({
    prenom: ['', Validators.required],
    nom: ['', Validators.required],
    numero: ['', Validators.required],
    gmail: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    // Ajoutez d'autres champs ici
  });



  constructor(private modalController: ModalController, private firestore: AngularFirestore,private fb: FormBuilder) {}

  onSubmit() {
    if (this.myForm.valid) {
      this.formulaireSoumis.emit(this.myForm.value);
      this.fermerFormulaire.emit();
    }
  }


  async ouvrirFormulaireModal() {
    const modal = await this.modalController.create({
      component: FormulaireComponent,
    });

    modal.onDidDismiss().then((result) => {
      // Vérifiez si le formulaire a été soumis
      if (result.role === 'formulaireSoumis') {
        const secretarieData = result.data; // Obtenez les données du formulaire soumis
        this.enregistrerSecretaire(secretarieData);
      }
    });

    await modal.present();
  }

  async enregistrerSecretaire(secretarieData: any) {
    try {
      await ajouterSecretaire(this.firestore, secretarieData);
      // Effectuez d'autres actions après l'enregistrement réussi
      console.log('Secrétaire enregistrée avec succès.');
    } catch (error) {
      console.error('Erreur lors de l\'enregistrement du secrétaire :', error);
      // Gérez les erreurs ici
    }
  }
}


@NgModule({
  declarations: [FormulaireComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
  ],
  exports: [FormulaireComponent],
  providers: [AngularFirestore],
})
export class FormulaireModule {}


