document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('newsletterForm');
    const emailInput = document.getElementById('emailInput');
    const errorMessage = document.getElementById('errorMessage');
    const thankYouMessage = document.getElementById('thankYouMessage');

    // Simple robust regex for basic email format checking
    const isValidEmail = (email) => {
        const regex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
        return regex.test(email);
    };

    form.addEventListener('submit', (event) => {
        // Prevent default form submission reload
        event.preventDefault();

        const emailValue = emailInput.value.trim();

        // Clear previous error messages
        errorMessage.textContent = '';
        emailInput.style.borderColor = '#d1d5db';

        // 1. Check if empty
        if (emailValue === '') {
            errorMessage.textContent = 'Email address cannot be blank.';
            emailInput.style.borderColor = '#ef4444';
            return;
        }

        // 2. Validate format using regex
        if (!isValidEmail(emailValue)) {
            errorMessage.textContent = 'Please enter a valid email address (e.g., name@example.com).';
            emailInput.style.borderColor = '#ef4444';
            return;
        }

        // 3. Store valid email in localStorage
        try {
            localStorage.setItem('subscribedEmail', emailValue);
            console.log('Saved to localStorage:', emailValue);
        } catch (error) {
            console.error('Failed to save to localStorage:', error);
        }

        // 4. Hide form and display success thank-you message
        form.classList.add('hidden');
        thankYouMessage.classList.remove('hidden');
    });
});