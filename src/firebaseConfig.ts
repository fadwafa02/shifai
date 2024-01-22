// Import des modules nécessaires
import { initializeApp, FirebaseOptions, FirebaseApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, signInWithEmailAndPassword, Auth, User, UserCredential } from 'firebase/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NgZone } from '@angular/core';
import { ɵAngularFireSchedulers, ɵAppCheckInstances, ɵZoneScheduler } from '@angular/fire';
import { AngularFireAuth } from '@angular/fire/compat/auth/auth';
import { AppCheck } from 'firebase/app-check';
import { Observable, of } from 'rxjs';


// Configuration Firebase
const firebaseConfig: FirebaseOptions = {
  apiKey: 'AIzaSyA7iKnEnxTdm9UdRnegNamwRDsLFESDk7s',
  authDomain: 'shifai-f46a0.firebaseapp.com',
  projectId: 'shifai-f46a0',
  storageBucket: 'shifai-f46a0.appspot.com',
  messagingSenderId: '383597072570',
  appId: '1:383597072570:web:fce1878ba6dbb5c528b283',
  measurementId: 'G-860KGY1PJL',
};

// Initialisation Firebase
export const app: FirebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Objet d'authentification pour être utilisé dans d'autres fichiers
const auth: Auth = getAuth(app);


// Fonction pour connecter l'utilisateur
export async function loginUser(email: string, password: string): Promise<UserCredential> {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log('Utilisateur connecté :', userCredential.user);

    return userCredential;
  } catch (error) {
    console.error(error);
    throw error;
  }
}




export async function AddUser(firestore: AngularFirestore, app: FirebaseApp, familyName: string, name: string, email: string, password: string, date: string, sexe: string) {
  const user = {
    familyName: familyName,
    name: name,
    email: email,
    password: password,
    date: date,
    sexe: sexe,
  };

  firestore.collection('inscrits').add(user)
    .then(() => {
      console.log('Utilisateur ajouté avec succès à Firebase.');
    })
    .catch(error => {
      console.error('Erreur lors de l\'ajout à Firebase :', error);
    });
}

export async function AddMedicament(firestore: AngularFirestore, app: FirebaseApp, nom: string, dosage: number, prises: any[], uid:string) {
  const medicament = {
    nom: nom,
    dosage: dosage,
    prises: prises.map(prise => ({
      label: prise.label,
      checked: prise.checked
    })),
    uid: uid,
  };

  try {
    await firestore.collection('medicaments').add(medicament);
  } catch (error) {
    console.error('Erreur lors de l\'ajout du médicament:', error);
    throw error;  // Renvoyer l'erreur pour que le gestionnaire puisse la gérer
  }
}

interface MedicamentData {
  nom: string;
  dosage: number;
  prise: boolean[];
  // Autres champs si nécessaire...
}

export async function getMedicamentsByUid(firestore: AngularFirestore, uid: string) {
  try {
    const snapshot = await firestore.collection('medicaments').ref.where('uid', '==', uid).get();
  
    // Convertir le snapshot en tableau de médicaments en utilisant l'interface
    const medicaments: MedicamentData[] = snapshot.docs.map(doc => {
      const data = doc.data() as MedicamentData; // Cast vers l'interface définie
      return { id: doc.id, ...data };
    });
  
    return medicaments;
  } catch (error) {
    console.error('Erreur lors de la récupération des médicaments :', error);
    throw error;
  }
  
}

