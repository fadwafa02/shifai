// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';  // Importez les modules auth nécessaires

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
