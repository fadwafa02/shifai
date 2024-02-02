import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { getSecretaireByUid } from 'src/firebaseConfig';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {  medecinUid } from 'src/firebaseConfig';
import { EventService } from 'src/app/event.service';
import { Subscription } from 'rxjs';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-parametre-secretaire',
  templateUrl: './parametre-secretaire.page.html',
  styleUrls: ['./parametre-secretaire.page.scss'],
})
export class ParametreSecretairePage implements OnInit, OnDestroy {

  @ViewChild('myModal') myModal: any;
  formulaireComponent = FormulaireComponent;
  uid = medecinUid;
  secretaire: any;
  private subscription: Subscription = new Subscription(); // Initialisation ajoutée

  constructor(
    private firestore: AngularFirestore,
    private modalController: ModalController,
    private eventService: EventService
  ) {}

  ngOnInit() {
    // Appeler fetchSecretaire lors du chargement initial
    this.fetchSecretaire();

    // Souscrire à l'événement de mise à jour du secrétaire
    this.subscription = this.eventService.secretaireUpdated$.subscribe(() => {
      this.fetchSecretaire();
    });
  }

  ngOnDestroy() {
    // Assurez-vous de désabonner la souscription pour éviter les fuites de mémoire
    this.subscription.unsubscribe();
  }

  async fetchSecretaire() {
    try {
      const secretaireData = await firstValueFrom(getSecretaireByUid(this.firestore, 'b2xIfQRkJABI4OL9JehI'));
  
      if (secretaireData) {
        // Vérifiez si les données sont disponibles
        this.secretaire = secretaireData;
        console.log('Secrétaire de l\'utilisateur :', this.secretaire);
      } else {
        console.error('Aucune donnée de secrétaire trouvée.');
      }
    } catch (error) {
      console.error('Erreur lors de la récupération du secrétaire :', error);
    }
  }
  

  async afficherFormulaireModal() {
    const modal = await this.modalController.create({
      component: this.formulaireComponent,
    });

    modal.onDidDismiss().then((data) => {
      // Traitez les données du formulaire ici (data.data)
      console.log('Données du formulaire modal soumis :', data.data);
    });

    return await modal.present();
  }
}
