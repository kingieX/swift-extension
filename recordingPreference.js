// JavaScript logic
document.addEventListener('DOMContentLoaded', function () {
    // Checkbox event listeners
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            console.log(`Checkbox with ID ${this.id} is now ${this.checked ? 'checked' : 'unchecked'}`);
            // Add your logic here based on checkbox changes
        });
    });

    // Button event listeners
    document.getElementById('reloadBtn').addEventListener('click', function () {
        console.log('Reload button clicked');
        // Add your logic here for reload button
    });

    document.getElementById('signOutBtn').addEventListener('click', function () {
        console.log('Sign out button clicked');
        // Add your logic here for sign out button
    });
});