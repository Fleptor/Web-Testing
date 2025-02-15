// Import Firebase functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// Your Firebase configuration (replace with your actual config)
const firebaseConfig = {
  apiKey: "AIzaSyAdxi3GRmNxVa-ro4x5_Tl6DDgWoDCwRn4",
  authDomain: "fleptortest.firebaseapp.com",
  projectId: "fleptortest",
  storageBucket: "fleptortest.firebasestorage.app",
  messagingSenderId: "666464512954",
  appId: "1:666464512954:web:ca3545dc458992fa080b83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Export Firestore instance
export { db };
