document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const firstNameInput = document.getElementById('firstname');
    const lastNameInput = document.getElementById('lastname');
    const emailInput = document.getElementById('email');
    const countryCodeInput = document.getElementById('countryCode');
    const phoneInput = document.getElementById('phone');
    const messageInput = document.getElementById('message');
    const submitBtn = document.getElementById('submitBtn');

    // Error message elements
    const firstNameError = document.getElementById('firstnameError');
    const lastNameError = document.getElementById('lastnameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const messageError = document.getElementById('messageError');

    // Sanitize user input
    const sanitizeInput = (input) => {
        const sanitized = input
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;")
            .replace(/[\r\n]/g, " ");
        return sanitized.trim();
    };

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }
        });
    });

    // Input validation logic
    const validateName = (name) => /^[A-Za-z]{3,}$/.test(name);
    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validatePhone = (phoneNumber) => /^\(\d{3}\) \d{3}-\d{4}$/.test(phoneNumber);

    const formatPhoneNumber = (value) => {
        const cleaned = value.replace(/\D/g, ''); // Remove non-digit characters
        if (cleaned.length > 10) return value; // Prevent invalid long input
        const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
        if (!match) return value;

        let formatted = '';
        if (match[1]) formatted = `(${match[1]}`;
        if (match[2]) formatted += `) ${match[2]}`;
        if (match[3]) formatted += `-${match[3]}`;

        return formatted;
    };

    phoneInput.addEventListener('input', () => {
        const formattedValue = formatPhoneNumber(phoneInput.value);
        phoneInput.value = formattedValue;

        // Prevent repetitive digits like "1111111111"
        const repetitivePattern = /^(\d)\1{9}$/;
        if (repetitivePattern.test(formattedValue.replace(/\D/g, ''))) {
            phoneError.textContent = 'Phone number cannot have repetitive digits';
            phoneInput.classList.add('invalid');
        } else {
            phoneError.textContent = '';
            phoneInput.classList.remove('invalid');
        }

        validateForm(); // Trigger form validation
    });

    const validateField = (input, validator, errorElement, errorMessage) => {
        const value = input.value.trim();
        const isValid = validator(value);

        if (!isValid) {
            errorElement.textContent = errorMessage;
            input.classList.add('invalid');
        } else {
            errorElement.textContent = '';
            input.classList.remove('invalid');
        }

        return isValid;
    };

    const validateForm = () => {
        const isFirstNameValid = validateField(
            firstNameInput,
            validateName,
            firstNameError,
            'First name must be at least 3 letters long'
        );

        const isLastNameValid = validateField(
            lastNameInput,
            validateName,
            lastNameError,
            'Last name must be at least 3 letters long'
        );

        const isEmailValid = validateField(
            emailInput,
            validateEmail,
            emailError,
            'Please enter a valid email address'
        );

        const isPhoneValid = validateField(
            phoneInput,
            validatePhone,
            phoneError,
            'Phone number must be in (XXX) XXX-XXXX format'
        );

        const isMessageValid = messageInput.value.trim().length > 0;
        messageError.textContent = isMessageValid ? '' : 'Message cannot be empty';

        submitBtn.disabled = !(isFirstNameValid && isLastNameValid && isEmailValid && isPhoneValid && isMessageValid);
    };

    // Glitch effect for text
    const glitchEffect = (element) => {
        setInterval(() => {
            const randomX = Math.random() * 4 - 2;
            const randomY = Math.random() * 4 - 2;
            element.style.textShadow = `
                ${randomX}px ${randomY}px #f4a32f,
                ${-randomX}px ${-randomY}px #88c057`;
        }, 100);
    };

    document.querySelectorAll('h1, h2').forEach(glitchEffect);

    // Add real-time validation listeners
    [firstNameInput, lastNameInput, emailInput, messageInput, countryCodeInput].forEach(input => {
        input.addEventListener('input', validateForm);
    });

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = {
            firstname: sanitizeInput(firstNameInput.value),
            lastname: sanitizeInput(lastNameInput.value),
            email: sanitizeInput(emailInput.value),
            phone: sanitizeInput(phoneInput.value),
            message: sanitizeInput(messageInput.value),
        };

        try {
            const response = await fetch('https://degenvets-contact.workers.dev', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Message sent successfully!');
                form.reset();
                submitBtn.disabled = true;
            } else {
                const errorText = await response.text();
                alert(`Failed to send message: ${errorText}`);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('There was a problem sending your message. Please try again later.');
        }
    });

    // Initial form validation
    validateForm();
});
