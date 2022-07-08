// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB8k3ChI4mPeffuDW6fqoyu1gDwxVhn5Iw",
    authDomain: "twitter-clone-68fda.firebaseapp.com",
    projectId: "twitter-clone-68fda",
    storageBucket: "twitter-clone-68fda.appspot.com",
    messagingSenderId: "462040737204",
    appId: "1:462040737204:web:93e353098ad1b18551bee1"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };