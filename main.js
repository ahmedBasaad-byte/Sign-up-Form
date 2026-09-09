// 1. Get the form and the password inputs from the DOM
const form = document.getElementById('signup-form');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

// 2. Function to check if the passwords match
function validatePasswords() {
    // Check if the values are different
    if (password.value !== confirmPassword.value) {
        // If they don't match, add the red border class to BOTH
        confirmPassword.setCustomValidity("Passwords do not match");
        confirmPassword.style.border = '1px solid red';
        password.style.border = '1px solid red';
    } else {
        // If they match, clear the error and reset the borders
        confirmPassword.setCustomValidity("");
        confirmPassword.style.border = '';
        password.style.border = '';
    }
}

// 3. Listen for user typing in either password field
password.addEventListener('input', validatePasswords);
confirmPassword.addEventListener('input', validatePasswords);

// 4. (Optional but recommended) Prevent the form from submitting if they don't match
form.addEventListener('submit', function(event) {
    if (password.value !== confirmPassword.value) {
        // Stop the form from submitting
        event.preventDefault();
        // Alert the user (or you can rely on the red borders)
        alert("Passwords do not match!");
    }
});