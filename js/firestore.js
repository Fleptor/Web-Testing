function submitData() {
    // Get form values
    const name = document.getElementById('name').value;
    const job = document.getElementById('job').value;
    const email = document.getElementById('email').value;

    // Validate input
    if (!name || !job || !email) {
        alert('Please fill out all fields.');
        return;
    }

    // Add data to Firestore
    db.collection('users').add({
        name: name,
        job: job,
        email: email,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(() => {
        alert('Data submitted successfully!');
        // Clear form fields
        document.getElementById('name').value = '';
        document.getElementById('job').value = '';
        document.getElementById('email').value = '';
    })
    .catch((error) => {
        console.error('Error adding document: ', error);
        alert('An error occurred. Please try again.');
    });
}
