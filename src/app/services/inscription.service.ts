import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'; // Utilisez la nouvelle API




@Injectable({
  providedIn: 'root'
})
export class InscriptionService {
  constructor(private firestore: AngularFirestore) {} // Utilisez AngularFirestore

  ajouterInscrit(familyName: string, name: string, email: string, password: string, date: string, sexe: string) {
    const nouvelInscrit = {
      familyName: familyName ,
      name: name,
      email: email,
      password: password,
      date: date,
      sexe: sexe
    };
    
    interface Inscrit {
      date: Date | null;
      email: string;
      familyName: string;
      name: string;
      password: string;
      sexe: string;
    }

    // Ajout du nouvel inscrit à une collection "inscrits" dans Firestore
    this.firestore.collection('inscrits').add(nouvelInscrit)
      .then((docRef) => {
        console.log('Inscrit ajouté avec l ID :', docRef.id);
      })
      .catch((error) => {
        console.error('Erreur lors de l ajout de l inscrit :', error);
      });
  }
}
