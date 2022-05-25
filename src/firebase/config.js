import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCHGiFZjrVORgxlzixu8D6PISHBp1ya0Yk",
  authDomain: "miniblog-78410.firebaseapp.com",
  projectId: "miniblog-78410",
  storageBucket: "miniblog-78410.appspot.com",
  messagingSenderId: "140425520377",
  appId: "1:140425520377:web:b13c8240916d28ef596e28"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };