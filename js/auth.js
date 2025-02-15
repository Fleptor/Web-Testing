// auth.js
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from './firebase-config.js';

// Sign-up form submission
document.getElementById('signup-form')?.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert('User signed up successfully!');
            window.location.href = 'signin.html'; // Redirect to sign-in page
        })
        .catch((error) => {
            alert(error.message);
        });
});

// Sign-in form submission
document.getElementById('signin-form')?.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission
    const email = document.getElementById('signin-email').value;
    const password = document.getElementById('signin-password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert('User signed in successfully!');
            window.location.href = 'dashboard.html'; // Redirect to dashboard or home page
        })
        .catch((error) => {
            alert(error.message);
        });
});
