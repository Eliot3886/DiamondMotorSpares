
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
    const templateParams = {
        name: this.name.value,
        email: this.email.value,
        message: this.message.value,
        time: timeString
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

