import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import AsyncStorage from "@react-native-async-storage/async-storage";

// ✅ Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAtjOz9FnetGrOz0gA4eexBe03OBCqdBYo",
  authDomain: "scootergamingapp-94bb4.firebaseapp.com",
  projectId: "scootergamingapp-94bb4",
  storageBucket: "scootergamingapp-94bb4.appspot.com",
  messagingSenderId: "453726606474",
  appId: "1:453726606474:web:d03639ef5990086de30973",
  measurementId: "G-NTRDR5R4EZ"
};

// ✅ Prevent duplicate Firebase initialization
let app;
if (!global.firebaseApp) {
  app = initializeApp(firebaseConfig);
  global.firebaseApp = app; // Store in global variable
} else {
  app = global.firebaseApp;
}

// ✅ Use getAuth() directly (NO initializeAuth)
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };
