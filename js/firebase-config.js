// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdxi3GRmNxVa-ro4x5_Tl6DDgWoDCwRn4",
  authDomain: "fleptortest.firebaseapp.com",
  projectId: "fleptortest",
  storageBucket: "fleptortest.firebasestorage.app",
  messagingSenderId: "666464512954",
  appId: "1:666464512954:web:ca3545dc458992fa080b83"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(app);
