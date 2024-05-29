// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Sticky navigation bar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > navbar.offsetHeight) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});

// Burger menu toggle
const burgerMenu = document.querySelector('.burger-menu');
const navLinks = document.querySelector('.nav-links');

burgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burgerMenu.classList.toggle('toggle');
});

// Form validation
const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    if (validateForm()) {
        // Send form data to backend or display success message
        console.log('Form submitted successfully!');
    }
});

function validateForm() {
    let isValid = true;

    if (nameInput.value.trim() === '') {
        isValid = false;
        setErrorFor(nameInput, 'Name cannot be blank');
    } else {
        setSuccessFor(nameInput);
    }

    if (emailInput.value.trim() === '') {
        isValid = false;
        setErrorFor(emailInput, 'Email cannot be blank');
    } else if (!isValidEmail(emailInput.value.trim())) {
        isValid = false;
        setErrorFor(emailInput, 'Invalid email address');
    } else {
        setSuccessFor(emailInput);
    }

    if (messageInput.value.trim() === '') {
        isValid = false;
        setErrorFor(messageInput, 'Message cannot be blank');
    } else {
        setSuccessFor(messageInput);
    }

    return isValid;
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const errorMessage = formControl.querySelector('.error-message');
    formControl.className = 'form-control error';
    errorMessage.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Lightbox gallery
const portfolioItems = document.querySelectorAll('.portfolio-item');

portfolioItems.forEach(item => {
    item.addEventListener('click', () => {
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close">&times;</span>
                <img src="${item.querySelector('img').src}" alt="Portfolio Image">
            </div>
        `;
        document.body.appendChild(modal);

        const closeButton = modal.querySelector('.close');
        closeButton.addEventListener('click', () => {
            modal.remove();
        });
    });
});
