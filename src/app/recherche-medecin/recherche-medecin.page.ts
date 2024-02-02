import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getMedecinsByLocalisationAndSpecialite } from 'src/firebaseConfig';
import { NavController } from '@ionic/angular';

// Interface pour décrire le format des données des médecins
interface MedecinData {
  id: string;
  nom: string;
  prenom: string;
  localisation: string;
  specialite: string;
  // ... autres champs si nécessaire
}

@Component({
  selector: 'app-recherche-medecin',
  templateUrl: './recherche-medecin.page.html',
  styleUrls: ['./recherche-medecin.page.scss'],
})
export class RechercheMedecinPage implements OnInit {

  medecins: MedecinData[] = [];
  localisation: string = '';
  specialite: string = '';

  constructor(private firestore: AngularFirestore, private navCtrl: NavController) { }

  ngOnInit() {
    this.fetchMedecins();
  }

  async fetchMedecins() {
    try {
      if (this.localisation && this.specialite) {
        this.medecins = await getMedecinsByLocalisationAndSpecialite(this.firestore, this.localisation, this.specialite);
        console.log('Médecins disponibles :', this.medecins);
      } else {
        console.error('Paramètres de recherche non valides.');
        // Ajoutez une logique pour afficher un message à l'utilisateur, si nécessaire
        // Par exemple, utilisez une alerte ou un autre mécanisme pour informer l'utilisateur
        // d'entrer des paramètres valides pour la recherche.
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des médecins (fetchMedecins):', error);
      // Ajoutez une logique pour afficher un message à l'utilisateur en cas d'erreur
      // Par exemple, utilisez une alerte ou un autre mécanisme pour informer l'utilisateur
      // qu'une erreur s'est produite lors de la récupération des médecins.
    }
  }

  goToAfficheMedecin(medecinUidValue: string) {
    // Stockez le medecinUid dans la variable exportée
    medecinUid = medecinUidValue;
    console.log('uid envoyé est :',medecinUidValue);
  
    // Utilisez this.navCtrl pour naviguer vers la page AfficheMedecinPage
    this.navCtrl.navigateForward('/affiche-medecin');
  }
  
}
export let medecinUid: string;

