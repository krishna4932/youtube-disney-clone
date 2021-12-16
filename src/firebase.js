import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAM1opgowmWLthN3wzs3vtNdwbbPQDm3eg",
  authDomain: "disney-plus-clone-unkk-4932.firebaseapp.com",
  projectId: "disney-plus-clone-unkk-4932",
  storageBucket: "disney-plus-clone-unkk-4932.appspot.com",
  messagingSenderId: "281629749643",
  appId: "1:281629749643:web:8654f6b6fedf6d73127f8e",
  measurementId: "G-KX22LQVQED",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

export { auth, provider };
export default db;
