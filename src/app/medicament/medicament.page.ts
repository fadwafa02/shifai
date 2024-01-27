import { Component, OnDestroy, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MedicamentFormComponent } from './medicament-form/medicament-form.component';
import { getMedicamentsByUid } from 'src/firebaseConfig';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { userUid } from 'src/app/login/login.page';
import { EventService } from 'src/app/event.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-medicament',
  templateUrl: 'medicament.page.html',
  styleUrls: ['medicament.page.scss']
})
export class MedicamentPage implements OnDestroy {

  @ViewChild('myModal') myModal: any;
  medicamentFormComponent = MedicamentFormComponent;

  uid = userUid;
  medicaments: any[] = [];
  
  private subscription: Subscription;

  constructor(private firestore: AngularFirestore,private modalController: ModalController, private eventService: EventService) {
     // Souscrire à l'événement de mise à jour des médicaments
     this.subscription = this.eventService.medicamentUpdated.subscribe(() => {
      this.fetchMedicaments();
    });
  }


  
  openMedicamentFormModal() {
    this.modalController.create({
      component: this.medicamentFormComponent,
    }).then(modal => {
      modal.present();
    });
  }

  dismissModal() {
    this.modalController.dismiss();
  }


  ionViewDidEnter() {
    // Appeler fetchMedicaments lors de l'entrée dans la vue
    this.fetchMedicaments();
  }


  modifierMedicament(medicamentId: string) {
    // Implémentez la logique de modification ici
  }

  supprimerMedicament(medicamentId: string) {
    // Implémentez la logique de suppression ici
  }

    // Utilisez la fonction pour récupérer les médicaments d'un utilisateur

   async fetchMedicaments() {
      try {
        this.medicaments = await getMedicamentsByUid(this.firestore, this.uid);
        console.log('Médicaments de l\'utilisateur :', this.medicaments);
      } catch (error) {
        console.error('Erreur lors de la récupération des médicaments :', error);
      }
    }

    ngOnDestroy() {
      // Assurez-vous de désabonner la souscription pour éviter les fuites de mémoire
      this.subscription.unsubscribe();
    }

   

    getIconName(prises: any[], label: string): string {
      const prise = prises.find(p => p.label === label);
      return prise ? (prise.checked ? 'checkmark' : 'close') : '';
    }
    
  
}

