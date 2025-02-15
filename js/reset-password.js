import { auth, sendPasswordResetEmail } from './firebase-config.js';

document.getElementById('reset-password-form').addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission

    const email = document.getElementById('reset-email').value;

    // Send a password reset email
    sendPasswordResetEmail(auth, email)
        .then(() => {
            alert('Password reset email sent! Check your inbox.');
            window.location.href = 'signin.html'; // Redirect to sign-in page
        })
        .catch((error) => {
            alert(error.message); // Show error message
        });
});
