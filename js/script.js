document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const firstNameInput = document.getElementById('firstname');
    const lastNameInput = document.getElementById('lastname');
    const emailInput = document.getElementById('email');
    const countryCodeInput = document.getElementById('countryCode');
    const phoneInput = document.getElementById('phone');
    const messageInput = document.getElementById('message');
    const submitBtn = document.getElementById('submitBtn');
    const month = new Date().getMonth(); // 0 = January, 11 = December
    const day = new Date().getDate(); // Get the current day
    
    const isSpring = month >= 2 && month <= 4; // March, April, May
    const isSummer = month >= 5 && month <= 7; // June, July, August
    const isFall = month >= 8 && month <= 10; // September, October, November
    const isWinter = month >= 11 || month <= 1; // December, January, February
    
    const holidays = {
        0: { 1: '🎆' }, // New Year's Day in January
        1: { 14: '❤️' }, // Valentine's Day in February
        2: { 17: '☘️' }, // St. Patrick's Day in March
        10: { 31: '🎃' }, // Halloween in October
        11: { 25: '🎄' }, // Christmas in December
        11: { 31: '🎆' }, // New Year's Eve in December
    };
    
    const seasonalEmojis = {
        spring: ['🌸', '💐', '🌷'],
        summer: ['☀️', '🍉', '🏖️'],
        fall: ['🍂', '🍁', '🌰'],
        winter: ['❄️', '☃️', '🧣'],
    };
    
    const createFallingItem = (emoji) => {
        const item = document.createElement('div');
        item.textContent = emoji;
        item.classList.add('falling-item');
        item.style.left = `${Math.random() * 100}vw`;
        item.style.animationDuration = `${Math.random() * 5 + 10}s`;
        item.style.fontSize = `${Math.random() * 15 + 15}px`;
        document.body.appendChild(item);
    
        item.addEventListener('animationend', () => {
            item.remove();
        });
    };
    
    let fallIntervalId;
    const startIncrementalAnimation = (emojis, initialInterval = 1000, incrementStep = 100, duration = 15000) => {
        let interval = initialInterval;
    
        const createInterval = () => {
            return setInterval(() => {
                const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
                createFallingItem(randomEmoji);
            }, interval);
        };
    
        fallIntervalId = createInterval();
    
        const incrementIntervalId = setInterval(() => {
            clearInterval(fallIntervalId);
            interval = Math.max(200, interval - incrementStep); 
            fallIntervalId = createInterval();
        }, 3000); // Adjust every 3 seconds
    
        // Stop after the total duration
        setTimeout(() => {
            clearInterval(fallIntervalId);
            clearInterval(incrementIntervalId);
        }, duration);
    };
    
    // Start season animation
    const startSeasonAnimation = () => {
        const holidayEmoji = holidays[month]?.[day];
        if (holidayEmoji) {
            startIncrementalAnimation([holidayEmoji]);
        } else if (isSpring) {
            startIncrementalAnimation(seasonalEmojis.spring);
        } else if (isSummer) {
            startIncrementalAnimation(seasonalEmojis.summer);
        } else if (isFall) {
            startIncrementalAnimation(seasonalEmojis.fall);
        } else if (isWinter) {
            startIncrementalAnimation(seasonalEmojis.winter);
        }
    };
    
    startSeasonAnimation();
    
    function showWhitepaper(event) {
        event.preventDefault(); 
        console.log("Whitepaper button clicked");
        window.open("./static/whitepaper.html", "Whitepaper", "width=800,height=600");
        document.getElementById('whitepaper').scrollIntoView({ behavior: 'smooth' }); 
    }
    
    function showDev(event) {
        event.preventDefault();
        console.log("Dev Docs button clicked");
        window.open("https://github.com/DegenVets/f2t/blob/gh-pages/docs/README.md", 
                    "DevDocs", "width=800,height=600");
        document.getElementById('dev').scrollIntoView({ behavior: 'smooth' });
    }
    
    function showPolicy(event) {
        event.preventDefault();
        console.log("Policy button clicked");
        window.open("./static/policy.html", "policy", "width=800,height=600"); 
        document.getElementById('policy').scrollIntoView({ behavior: 'smooth' });
    }
        

    const firstNameError = document.getElementById('firstnameError');
    const lastNameError = document.getElementById('lastnameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const messageError = document.getElementById('messageError');
    const sanitizeInput = (input) => {
        const sanitized = input
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;")
            .replace(/[\r\n]/g, " ");
        return sanitized.trim();
    };
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
    const validateName = (name) => /^[A-Za-z]{3,}$/.test(name);
    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validatePhone = (phoneNumber) => /^\(\d{3}\) \d{3}-\d{4}$/.test(phoneNumber);

    const formatPhoneNumber = (value) => {
        const cleaned = value.replace(/\D/g, '');
        if (cleaned.length > 10) return value;
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
        const repetitivePattern = /^(\d)\1{9}$/;
        if (repetitivePattern.test(formattedValue.replace(/\D/g, ''))) {
            phoneError.textContent = 'Phone number cannot have repetitive digits';
            phoneInput.classList.add('invalid');
        } else {
            phoneError.textContent = '';
            phoneInput.classList.remove('invalid');
        }

        validateForm();
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

    const waveText = document.getElementById('wave-text');
    const runWaveAnimation = () => {
        anime({
            targets: '#wave-text',
            translateY: [
                { value: -5, duration: 500 },
                { value: 5, duration: 500 }
            ],
            easing: 'easeInOutSine',
            loop: false, 
        });
    };
    runWaveAnimation();
        waveText.addEventListener('mouseenter', () => {
            runWaveAnimation();
        });
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
    validateForm();

});
