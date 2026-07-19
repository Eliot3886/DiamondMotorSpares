
// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (!targetId || targetId.length < 2) return;
        const target = document.querySelector(targetId);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});


if (typeof emailjs !== 'undefined') {
    emailjs.init("XTyZeMzltp00mJ7uX");
}

const contactForm = document.getElementById('contact-form');

if (contactForm) {
contactForm.addEventListener('submit', function(event) {
    event.preventDefault();


    // Generate current time for the {{time}} variable in your template
    const now = new Date();
    const timeString = now.toLocaleString();

    // These IDs come from your EmailJS Dashboard
    const serviceID = 'service_tv7rulb'; // e.g., service_xxxx
    const templateID = 'template_f69k8qv'; // e.g., template_xxxx

    // Prepare the template parameters
// Prepare the template parameters to match your EmailJS Template
const templateParams = {
    name: this.name.value,
    email: this.email.value,
    tel: this.tel.value,        // Matches {{tel}} in your template
    service: this.service.value, // Matches {{service}} in your template
    message: this.message.value,
    time: timeString            // Matches {{time}} in your template
};

    emailjs.send(serviceID, templateID, templateParams)
        .then(() => {
            alert('Sent Successfully! Thank you for contacting Diamond Motor Spares. We have received your message and will come back to you shortly')
            this.reset(); // Clears the form
        }, (err) => {
            alert('Failed to reach Diamond Motor Spares. Error:' + JSON.stringify(err));
        });
});
}
//Search Bar

// This "DOMContentLoaded" wrapper is the fix for the Null error
document.addEventListener('DOMContentLoaded', function() {
    
    const searchInput = document.getElementById('searchInput');
    const listItems = document.querySelectorAll('#categoryList li');

    // Check if the input exists before adding the listener
    if (searchInput) {
        searchInput.addEventListener('keyup', function() {
            let filter = this.value.toLowerCase();

            listItems.forEach(function(item) {
                let text = item.textContent.toLowerCase();
                if (text.includes(filter)) {
                    item.style.display = ""; 
                } else {
                    item.style.display = "none"; 
                }
            });
        });
    }
});

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'flex'; // Shows the Request Quote form
    }
}

// Optional: Close modal when clicking outside of it

function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Optional: Close modal if user clicks anywhere outside of the form box
window.onclick = function(event) {
    let modal = document.getElementById('quoteModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Close the mobile navigation as soon as a destination is chosen. This also
// covers links that navigate to another page and links that scroll on the home page.
document.querySelectorAll('.nav-links a').forEach((link) => {
    link.addEventListener('click', () => {
        const menuToggle = document.querySelector('.menu-toggle');
        if (menuToggle) menuToggle.checked = false;
    });
});

// Lightweight, progressive enhancement for premium page transitions.
// Content remains visible if JavaScript is unavailable.
const revealTargets = document.querySelectorAll(
    '.trust-strip, .confidence-section, #dedicated-products, .testimonials-section, .quote-banner, .contact-wrapper, body.component-page .part-card'
);

if ('IntersectionObserver' in window) {
    revealTargets.forEach((element) => element.classList.add('reveal-on-scroll'));
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });
    revealTargets.forEach((element) => revealObserver.observe(element));
}

// Defer below-the-fold catalogue imagery without delaying the first impression.
document.querySelectorAll('img.img-fluid').forEach((image) => {
    image.loading = 'lazy';
    image.decoding = 'async';
});

const backToTop = document.createElement('button');
backToTop.type = 'button';
backToTop.className = 'back-to-top';
backToTop.setAttribute('aria-label', 'Back to top');
backToTop.innerHTML = '<i class="fas fa-arrow-up" aria-hidden="true"></i>';
backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
document.body.appendChild(backToTop);

window.addEventListener('scroll', () => {
    backToTop.classList.toggle('is-visible', window.scrollY > 500);
}, { passive: true });

// Shared, progressive motion system. It only animates elements once they are
// close to the viewport, keeping scrolling responsive on lower-powered phones.
const motionTargets = document.querySelectorAll(
    'main section, .about-section, .trust-strip, .confidence-section, #dedicated-products, .testimonials-section, .quote-banner, .contact-wrapper, .product-card-dedicated, body.component-page .part-card, .filter-box, .info-sidebar, .form-container'
);

if ('IntersectionObserver' in window) {
    let staggerIndex = 0;
    motionTargets.forEach((element) => {
        if (element.classList.contains('reveal-on-scroll')) return;
        element.classList.add('reveal-on-scroll');
        if (element.matches('.product-card-dedicated, body.component-page .part-card, .confidence-points article')) {
            element.style.setProperty('--reveal-delay', `${Math.min(staggerIndex++ * 55, 275)}ms`);
        }
    });

    const mobileMotionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        });
    }, { rootMargin: '0px 0px -7% 0px', threshold: 0.08 });

    document.querySelectorAll('.reveal-on-scroll').forEach((element) => mobileMotionObserver.observe(element));
}

// Every page shares a balanced footer ending, including the developer credit.
document.querySelectorAll('.main-footer').forEach((footer) => {
    if (footer.querySelector('.footer-bottom')) return;
    const footerBottom = document.createElement('div');
    footerBottom.className = 'footer-bottom';
    footerBottom.innerHTML = `<p>&copy; ${new Date().getFullYear()} Diamond Motor Spares. All rights reserved.</p><p class="footer-credit">Developed by <strong>Eliot Chitowamombe</strong></p>`;
    footer.appendChild(footerBottom);
});

// A non-blocking page-ready state provides a polished entrance without hiding
// content if JavaScript or animation support is unavailable.
requestAnimationFrame(() => document.documentElement.classList.add('page-ready'));
