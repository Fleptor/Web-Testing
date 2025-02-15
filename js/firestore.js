// Import Firestore functions and db instance
import { db } from './firebase-config.js';
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// Function to submit data to Firestore
window.submitData = async function () {
    // Get form values
    const name = document.getElementById('name').value;
    const job = document.getElementById('job').value;
    const email = document.getElementById('email').value;

    // Validate input
    if (!name || !job || !email) {
        alert('Please fill out all fields.');
        return;
    }

    try {
        // Add a new document to the "users" collection
        await addDoc(collection(db, 'users'), {
            name: name,
            job: job,
            email: email,
            timestamp: serverTimestamp() // Use server-side timestamp
        });
        alert('Data submitted successfully!');
        // Clear form fields
        document.getElementById('name').value = '';
        document.getElementById('job').value = '';
        document.getElementById('email').value = '';
    } catch (error) {
        console.error('Error adding document: ', error);
        alert('An error occurred. Please try again.');
    }
};
