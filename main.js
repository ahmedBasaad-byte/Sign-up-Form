const form = document.getElementById('signup-form');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

function validatePasswords() {
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

password.addEventListener('input', validatePasswords);
confirmPassword.addEventListener('input', validatePasswords);

form.addEventListener('submit', function(event) {
    if (password.value !== confirmPassword.value) {
        event.preventDefault();
        alert("Passwords do not match!");
    }
});