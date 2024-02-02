// Import des modules nécessaires
import { initializeApp, FirebaseOptions, FirebaseApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, signInWithEmailAndPassword, Auth, User, UserCredential } from 'firebase/auth';
import { AngularFirestore, AngularFirestoreCollection, CollectionReference, DocumentData, QuerySnapshot } from '@angular/fire/compat/firestore';
import { NgZone } from '@angular/core';
import { ɵAngularFireSchedulers, ɵAppCheckInstances, ɵZoneScheduler } from '@angular/fire';
import { AngularFireAuth } from '@angular/fire/compat/auth/auth';
import { AppCheck } from 'firebase/app-check';
import { Observable, catchError, firstValueFrom, map, of } from 'rxjs';


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
export async function loginUser(email: string, password: string) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log('Utilisateur connecté :', userCredential.user);
    return userCredential;
  } catch (error) {
    console.error(error);
    throw error;
  }
}




export async function AddUser(firestore: AngularFirestore, app: FirebaseApp, familyName: string, name: string, email: string, password: string, date: string, sexe: string, role: string) {
  const user = {
    familyName: familyName,
    name: name,
    email: email,
    password: password,
    date: date,
    sexe: sexe,
    role: role,
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

// Exemple d'interface pour la structure des données des médecins
interface MedecinData {
  // Définissez les champs nécessaires
  id : string ;
  nom: string;
  prenom:string;
  localisation:string;
  specialite:string;
  // ... autres champs
}




export async function getMedecinsByLocalisationAndSpecialite(firestore: AngularFirestore, localisation: string | null, specialite: string | null) {
  try {
    const snapshot = await firestore.collection('medecin').ref.where('specialite', '==', specialite).where('localisation', '==', localisation).get();

    // Vérifier si snapshot est défini avant de l'utiliser
    if (snapshot) {
      // Convertir le snapshot en tableau de médecins
      const medecins: MedecinData[] = snapshot.docs.map(doc => {
        const data = doc.data() as MedecinData;
        return { uid: doc.id, ...data };
      });

      return medecins;
    } else {
      console.error('La requête n\'a pas renvoyé de snapshot.');
      return []; // Ou lancez une erreur appropriée selon vos besoins
    }
  } catch (error) {
    console.error('Erreur lors de la récupération des médecins (firebase) :', error);
    throw error;
  }
}

export async function AddMedecin(firestore: AngularFirestore, app: FirebaseApp, nom: string, prenom: string, email: string, password: string, date: string, sexe: string, role: string, specialite:string,localisation:string ) {
  const medecin = {
    nom: nom,
    prenom: prenom,
    email: email,
    password: password,
    date: date,
    sexe: sexe,
    role: role,
    localisation: localisation,
    specialite: specialite,

  };

  firestore.collection('medecin').add(medecin)
    .then(() => {
      console.log('Utilisateur ajouté avec succès à Firebase.');
    })
    .catch(error => {
      console.error('Erreur lors de l\'ajout à Firebase :', error);
    });
}


export async function getMedecinByUid(firestore: AngularFirestore, uid: string) {
  const snapshot = await firestore.collection('medecin').ref.where('uid', '==', uid).get();
  if (snapshot) {
    // Convertir le snapshot en tableau de médecins
    const medecins: MedecinData[] = snapshot.docs.map(doc => {
      const data = doc.data() as MedecinData;
      return { uid: doc.id, ...data };
    });

    return medecins;
      } else {
        console.log('Aucun médecin trouvé pour cet UID :', uid);
        return null; // Ou renvoyez un objet vide, selon vos besoins
      }
    }

    export async function loginMedecin(firestore: AngularFirestore, email: string, password: string): Promise<{ medecinData: any, uid: string } | null> {
      try {
        // Recherchez le médecin dans la base de données avec l'email fourni
        const medecinCollection: CollectionReference<DocumentData> = firestore.collection('medecin').ref as CollectionReference<DocumentData>;
        const medecinQuery: QuerySnapshot<DocumentData> = await medecinCollection.where('email', '==', email).get();
    
        if (medecinQuery.size === 1) {
          // Vérifiez le mot de passe (vous pouvez utiliser une bibliothèque de hachage appropriée)
          const medecinData = medecinQuery.docs[0].data() as { password?: string };
          const uid = medecinQuery.docs[0].id;
    
          if (medecinData && medecinData.password === password) {
            console.log('Connexion réussie en tant que médecin.');
            return { medecinData, uid }; // Authentification réussie, renvoie les informations du médecin et son UID
          }
        }
    
        console.error('Identifiants invalides.');
        return null; // Authentification échouée
    
      } catch (error) {
        console.error('Erreur lors de la connexion du médecin :', error);
        throw error; // Vous pouvez gérer l'erreur ici ou la laisser remonter
      }
    }
  
    export const medecinUid = { uid: '' };

    export async function ajouterSecretaire(firestore: AngularFirestore, secretarieData: any): Promise<void> {
      try {
        // Ajoutez votre logique pour ajouter les données du formulaire à la collection 'secretaire'
        // Utilisez firestore.collection('secretaire') pour accéder à la collection 'secretaire' dans Firebase
        await firestore.collection('secretaire').add(secretarieData);
    
        console.log('Secrétaire ajoutée avec succès à la base de données.');
      } catch (error) {
        console.error('Erreur lors de l\'ajout du secrétaire à la base de données :', error);
        throw error; // Vous pouvez gérer l'erreur ici ou la laisser remonter
      }
    }

    export const getSecretaireByUid = (firestore: AngularFirestore, uid: string): Observable<any> => {
      return firestore.collection('secretaires').doc(uid).snapshotChanges().pipe(
        map(docChange => {
          const data = docChange.payload.data();
          if (data) {
            return data;
            console.log(data);
          } else {
            throw new Error('Secrétaire non trouvé');
          }
        })
      );
    };