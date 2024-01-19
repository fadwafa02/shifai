// Import des modules nécessaires
import { initializeApp, FirebaseOptions, FirebaseApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, signInWithEmailAndPassword, Auth, User } from 'firebase/auth';
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

export async function AddMedicament(firestore: AngularFirestore, app: FirebaseApp, nom: string, dosage: number, frequence: boolean[]) {
  const medicament = {
    nom: nom,
    dosage: dosage,
    frequence: frequence,
  };

  firestore.collection('medicaments').add(medicament)
    .then(() => {
      console.log('Médicament ajouté avec succès à Firebase.');
    })
    .catch(error => {
      console.error('Erreur lors de l\'ajout du médicament à Firebase :', error);
    });
}


/* Nom de la base de données
const databaseName = 'medicament';

// Instance de NgZone
const ngZone = new NgZone({});

// Définissez votre propre type sans la propriété keepUnstableUntilFirst
type MyAngularFireSchedulers = Omit<ɵAngularFireSchedulers, 'keepUnstableUntilFirst'> & { provider: 'firebase' };

const schedulers: MyAngularFireSchedulers = {
  ...{} as ɵAngularFireSchedulers,
  outsideAngular: ngZone.runOutsideAngular.bind(ngZone) as unknown as ɵZoneScheduler,
  insideAngular: ngZone.run.bind(ngZone) as unknown as ɵZoneScheduler,
  provider: 'firebase',
};

// Interface Settings
interface Settings {
  provider: string;
  apiKey: string;
  projectId: string;
}

// Extend Settings pour créer MySettings avec des propriétés supplémentaires
interface MySettings extends Settings {
  // Ajoutez les propriétés supplémentaires spécifiques à MySettings ici
  loggingEnabled: boolean;
  enforcementMode: 'debug' | 'enforce';
}

// Options supplémentaires pour appCheckOptions
const additionalAppCheckOptions: MySettings = {
  provider: 'firebase',
  apiKey: 'AIzaSyA7iKnEnxTdm9UdRnegNamwRDsLFESDk7s',
  projectId: 'shifai-f46a0',
  loggingEnabled: true,
  enforcementMode: 'debug',
};

// Merge des options pour appCheckOptions
const appCheckOptions: Settings = {
  ...additionalAppCheckOptions,
};

const appCheckInstancesOptions: ɵAppCheckInstances = {
  length: 0,
  pop: function (): AppCheck | undefined {
    throw new Error('Function not implemented.');
  },
  push: function (...items: AppCheck[]): number {
    throw new Error('Function not implemented.');
  },
  concat: function (...items: ConcatArray<AppCheck>[]): AppCheck[] {
    throw new Error('Function not implemented.');
  },
  join: function (separator?: string | undefined): string {
    throw new Error('Function not implemented.');
  },
  reverse: function (): AppCheck[] {
    throw new Error('Function not implemented.');
  },
  shift: function (): AppCheck | undefined {
    throw new Error('Function not implemented.');
  },
  slice: function (start?: number | undefined, end?: number | undefined): AppCheck[] {
    throw new Error('Function not implemented.');
  },
  sort: function (compareFn?: ((a: AppCheck, b: AppCheck) => number) | undefined): ɵAppCheckInstances {
    throw new Error('Function not implemented.');
  },
  splice: function (start: number, deleteCount?: number | undefined): AppCheck[] {
    throw new Error('Function not implemented.');
  },
  unshift: function (...items: AppCheck[]): number {
    throw new Error('Function not implemented.');
  },
  indexOf: function (searchElement: AppCheck, fromIndex?: number | undefined): number {
    throw new Error('Function not implemented.');
  },
  lastIndexOf: function (searchElement: AppCheck, fromIndex?: number | undefined): number {
    throw new Error('Function not implemented.');
  },
  every: function <S extends AppCheck>(predicate: (value: AppCheck, index: number, array: AppCheck[]) => value is S, thisArg?: any): this is S[] {
    throw new Error('Function not implemented.');
  },
  some: function (predicate: (value: AppCheck, index: number, array: AppCheck[]) => unknown, thisArg?: any): boolean {
    throw new Error('Function not implemented.');
  },
  forEach: function (callbackfn: (value: AppCheck, index: number, array: AppCheck[]) => void, thisArg?: any): void {
    throw new Error('Function not implemented.');
  },
  map: function <U>(callbackfn: (value: AppCheck, index: number, array: AppCheck[]) => U, thisArg?: any): U[] {
    throw new Error('Function not implemented.');
  },
  filter: function <S extends AppCheck>(predicate: (value: AppCheck, index: number, array: AppCheck[]) => value is S, thisArg?: any): S[] {
    throw new Error('Function not implemented.');
  },
  reduce: function (callbackfn: (previousValue: AppCheck, currentValue: AppCheck, currentIndex: number, array: AppCheck[]) => AppCheck): AppCheck {
    throw new Error('Function not implemented.');
  },
  reduceRight: function (callbackfn: (previousValue: AppCheck, currentValue: AppCheck, currentIndex: number, array: AppCheck[]) => AppCheck): AppCheck {
    throw new Error('Function not implemented.');
  },
  find: function <S extends AppCheck>(predicate: (value: AppCheck, index: number, obj: AppCheck[]) => value is S, thisArg?: any): S | undefined {
    throw new Error('Function not implemented.');
  },
  findIndex: function (predicate: (value: AppCheck, index: number, obj: AppCheck[]) => unknown, thisArg?: any): number {
    throw new Error('Function not implemented.');
  },
  fill: function (value: AppCheck, start?: number | undefined, end?: number | undefined): ɵAppCheckInstances {
    throw new Error('Function not implemented.');
  },
  copyWithin: function (target: number, start: number, end?: number | undefined): ɵAppCheckInstances {
    throw new Error('Function not implemented.');
  },
  entries: function (): IterableIterator<[number, AppCheck]> {
    throw new Error('Function not implemented.');
  },
  keys: function (): IterableIterator<number> {
    throw new Error('Function not implemented.');
  },
  values: function (): IterableIterator<AppCheck> {
    throw new Error('Function not implemented.');
  },
  includes: function (searchElement: AppCheck, fromIndex?: number | undefined): boolean {
    throw new Error('Function not implemented.');
  },
  [Symbol.
    iterator]: function (): IterableIterator<AppCheck> {
      throw new Error('Function not implemented.');
    },
    [Symbol.unscopables]: undefined as any,
};

const nullObservable: Observable<User | null> = of(null);
const auth1: AngularFireAuth = {
  // Utilisez les propriétés nécessaires de l'objet auth (assurez-vous que ces propriétés sont disponibles dans Auth)
  authState: nullObservable, // Remplacez null par la valeur réelle si authState est disponible dans votre objet Auth
  idToken: null,   // Remplacez null par la valeur réelle si idToken est disponible dans votre objet Auth
  // ... autres propriétés nécessaires

  // Assurez-vous de définir ces méthodes correctement ou remplacez-les par des fonctions réelles
  signInWithPopup: () => Promise.resolve(null),

  // ... autres méthodes nécessaires
};

// Instance d'AngularFirestore avec les options par défaut
export const firestore = new AngularFirestore(
  firebaseConfig, // FirebaseOptions
  databaseName, // string | null | undefined
  false,        // boolean | null (shouldEnablePersistence)
  null,         // settings (removed appCheckOptions)     
  Object,    // platformId (address the "Object" argument issue)
  ngZone,       // NgZone
  schedulers,   // ɵAngularFireSchedulers
  null,         // persistenceSettings
  null,         // _useEmulator
  auth1,         // AngularFireAuth
  null,         // useAuthEmulator
  null,         // authSettings
  null,         // tenantId
  null,         // languageCode
  null,         // useDeviceLanguage
  null,         // persistence
  appCheckInstancesOptions // Pass appCheckInstancesOptions as a separate argument
);


// Fonction pour ajouter un médicament à la collection
export async function addMedicament(medicament: any) {
  if (medicament) {
    return firestore.collection('medicaments').add(medicament);
  }
  return Promise.reject('Invalid medicament data');
}


*/