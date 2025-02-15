// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    onAuthStateChanged, 
    sendPasswordResetEmail,
    signOut 
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAdxi3GRmNxVa-ro4x5_Tl6DDgWoDCwRn4",
  authDomain: "fleptortest.firebaseapp.com",
  projectId: "fleptortest",
  storageBucket: "fleptortest.firebasestorage.app",
  messagingSenderId: "666464512954",
  appId: "1:666464512954:web:ca3545dc458992fa080b83"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { 
    auth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    onAuthStateChanged, 
    sendPasswordResetEmail,
    signOut, 
    db 
};
