// Import des modules nécessaires
import { initializeApp, FirebaseOptions } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, signInWithEmailAndPassword, Auth } from 'firebase/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NgZone } from '@angular/core';
import { ɵAngularFireSchedulers } from '@angular/fire';


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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Objet d'authentification pour être utilisé dans d'autres fichiers

export const auth: Auth = getAuth(app);

// Fonction pour connecter l'utilisateur
export async function loginUser(email: string, password: string) {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    console.log(res);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

// Nom de la base de données
const databaseName = 'medicament';

// Instance de NgZone
const ngZone = new NgZone({});

// Définition des planificateurs pour AngularFire
const schedulers: ɵAngularFireSchedulers = {
  keepUnstableUntilFirst: <T>(fn: () => Promise<T>) => ngZone.runOutsideAngular(fn),
  outsideAngular: <T>(fn: (...args: any[]) => T) => ngZone.runOutsideAngular(() => fn()),
};


// Instance d'AngularFirestore avec les options par défaut
export const firestore = new AngularFirestore(
  app,
  databaseName,
  false,
  null,
  Object,
  ngZone,
  schedulers,
  null,
  null,
  auth,
  null,
  null,
  null,
  null,
  null,
  null,
  null
);

// Fonction pour ajouter un médicament à la collection
export async function addMedicament(medicament: any) {
  if (medicament) {
    return firestore.collection('medicaments').add(medicament);
  }
  return Promise.reject('Invalid medicament data');
}
