// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';  // Importez les modules auth nécessaires
import { AngularFirestore } from '@angular/fire/compat/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA7iKnEnxTdm9UdRnegNamwRDsLFESDk7s',
  authDomain: 'shifai-f46a0.firebaseapp.com',
  projectId: 'shifai-f46a0',
  storageBucket: 'shifai-f46a0.appspot.com',
  messagingSenderId: '383597072570',
  appId: '1:383597072570:web:fce1878ba6dbb5c528b283',
  measurementId: 'G-860KGY1PJL',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Exportez l'objet auth pour être utilisé dans d'autres fichiers
export const auth = getAuth(app);

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

// Obtenez une instance d'AngularFirestore avec les options par défaut
export const firestore = new AngularFirestore(
  app,
  'default',  // Nom de la base de données (peut être null pour la base de données par défaut)
  null,       // Authentification (peut être null si vous n'en avez pas besoin pour l'instant)
  null,       // Paramètres de persistance (peut être null pour utiliser les paramètres par défaut)
);

export async function addMedicament(medicament: any) {
  if (medicament) {
    return firestore.collection('medicaments').add(medicament);
  }
  return Promise.reject('Invalid medicament data');
}
