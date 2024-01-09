import {getApp, getApps, initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage}from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyC03lWYEcZQiN7OWxwks8Q3WGHNB8bH-oA",
    authDomain: "restaurantapp-b412f.firebaseapp.com",
    databaseURL: "https://restaurantapp-b412f-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "restaurantapp-b412f",
    storageBucket: "restaurantapp-b412f.appspot.com",
    messagingSenderId: "1038656356024",
    appId: "1:1038656356024:web:986daba6b05123263dfe4d",
    measurementId: "G-PH0ZWNRG2X"
  };


  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app);
  const storage = getStorage(app);

  export { app, firestore, storage };