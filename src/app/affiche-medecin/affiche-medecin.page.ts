import { Component, OnInit } from '@angular/core';
import { medecinUid } from 'src/app/recherche-medecin/recherche-medecin.page';
import { getMedecinByUid } from 'src/firebaseConfig';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-affiche-medecin',
  templateUrl: './affiche-medecin.page.html',
  styleUrls: ['./affiche-medecin.page.scss'],
})
export class AfficheMedecinPage implements OnInit {

  medecin: any; 

  constructor(private firestore: AngularFirestore) { }

  ngOnInit() {
    const medecinUidValue = medecinUid;
    this.fetchMedecin(medecinUidValue);  // Appelez la méthode fetchMedecin avec l'UID
  }

  async fetchMedecin(medecinUidValue: string) {
    try {
      this.medecin = await getMedecinByUid(this.firestore, medecinUidValue);
      console.log('Médecin :', this.medecin);
    } catch (error) {
      console.error('Erreur lors de la récupération du médecin :', error);
    }
  }
}
