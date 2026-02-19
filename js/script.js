
// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


(function() {
    // Your Public Key you just provided
    emailjs.init("XTyZeMzltp00mJ7uX");
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
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