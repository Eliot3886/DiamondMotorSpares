// Mobile Menu Toggle
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Basic Form Alert
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you! Your message has been sent to Diamond Motor Spares.');
});

