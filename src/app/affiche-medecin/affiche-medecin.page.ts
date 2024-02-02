import { Component, OnInit } from '@angular/core';
import { getMedecinByUid } from 'src/firebaseConfig';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Subscription } from 'rxjs';
import { medecinUid } from 'src/app/recherche-medecin/recherche-medecin.page';

@Component({
  selector: 'app-affiche-medecin',
  templateUrl: './affiche-medecin.page.html',
  styleUrls: ['./affiche-medecin.page.scss'],
})
export class AfficheMedecinPage implements OnInit {

  medecin: any;
  private medecinSubscription: Subscription | undefined ; 
  medecinid ="" ;

  constructor( private firestore: AngularFirestore) {
  }

  ngOnInit() {
 
    this.medecinid = medecinUid;
    console.log('Médecin UID récupéré :', this.medecinid);
    if (this.medecinid) {
      console.log('Médecin UID récupéré :', this.medecinid);
      this.fetchMedecin(this.medecinid);
    } else {
      console.error('Erreur: medecinUid est undefined.');
    }
  }

  async fetchMedecin(medecinUidValue: string) {
    try {
      this.medecin = await getMedecinByUid(this.firestore, medecinUidValue);
      console.log('Médecin récupéré :', this.medecin);
    } catch (error) {
      console.error('Erreur lors de la récupération du médecin :', error);
    }
  }
}
