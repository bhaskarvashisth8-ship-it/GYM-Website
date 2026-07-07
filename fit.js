// Element Selection
const menuBtn = document.querySelector('#menu-btn');
const navbar = document.querySelector('.header .navbar');
const navLinks = document.querySelectorAll('.header .navbar a');

// 1. Mobile Menu Toggle Interaction
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

// Remove active drawer properties on click away
window.addEventListener('scroll', () => {
    menuBtn.classList.remove('fa-times');
    navbar.classList.remove('active');
    updateActiveNavLink();
});

// 2. Active Section Navigation Mapping on Scroll
function updateActiveNavLink() {
    let fromTop = window.scrollY + 120;

    navLinks.forEach(link => {
        let section = document.querySelector(link.hash);
        
        if (section &&
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop) {
            navLinks.forEach(item => item.classList.remove('active'));
            link.classList.add('active');
        }
    });
}

// 3. Handle Pricing Plan Selection Event
const planButtons = document.querySelectorAll('.plan-btn');
planButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const planName = e.target.getAttribute('data-plan');
        alert(`Thank you for choosing the ${planName}! Redirecting to checkout portal...`);
    });
});

// 4. Form Submission Handling
const contactForm = document.querySelector('#gym-contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevents page reload
        
        const name = document.querySelector('#form-name').value;
        const email = document.querySelector('#form-email').value;
        
        // Simulating functional message process handling
        alert(`Awesome, thanks ${name}! We have received your inquiry. A fitness coordinator will message you back at ${email} shortly.`);
        
        contactForm.reset(); // Clear text inputs
    });
}