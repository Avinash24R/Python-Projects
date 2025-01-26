document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        alert('Login successful for ' + email);
        // Logic for login can be added here, like API calls or validation
    } else {
        alert('Please fill out all fields.');
    }
});
