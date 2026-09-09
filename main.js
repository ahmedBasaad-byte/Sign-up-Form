const form = document.getElementById('signup-form');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

function validatePasswords() {
    if (password.value !== confirmPassword.value) {
        confirmPassword.style.border = '1px solid red';
        password.style.border = '1px solid red';
    }
     else {
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