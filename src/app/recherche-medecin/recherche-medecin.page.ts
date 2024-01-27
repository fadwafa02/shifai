import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getMedecinsByLocalisationAndSpecialite } from 'src/firebaseConfig';

@Component({
  selector: 'app-recherche-medecin',
  templateUrl: './recherche-medecin.page.html',
  styleUrls: ['./recherche-medecin.page.scss'],
})
export class RechercheMedecinPage implements OnInit {


  medecins: any;
  localisation: string = '';
  specialite: string = '';

  constructor(private firestore: AngularFirestore) { }

  ngOnInit() {
  }

  async fetchMedecins() {
    try {
      this.medecins = await getMedecinsByLocalisationAndSpecialite(this.firestore, this.localisation, this.specialite);
      
      console.log('Médecins disponibles :', this.medecins);
    } catch (error) {
      console.error('Erreur lors de la récupération des médecins (fetchMedecins):', error);
    }
  }

}
