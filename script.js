// Set current year
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('year').textContent = new Date().getFullYear();

    // Form submission
    const form = document.getElementById('portfolio-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            // Collect form data
            const formData = new FormData(form);
            const name = formData.get('name');
            const email = formData.get('email');
            const phone = formData.get('phone');
            const description = formData.get('description');

            // EmailJS parameters
            const serviceID = 'service_j6e3za8';
            const templateID = 'template_a1e36qi';
            const publicKey = 'Bc45qM_RC5tL6ZnD7';

            // Send email
            emailjs.send(serviceID, templateID, {
                from_name: name,
                from_email: email,
                phone: phone,
                description: description,
                to_email: 'ayush93014@gmail.com'
            }, publicKey)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Thank you for your request! Your details have been sent. Please complete the payment and send the transaction ID to ayush93014@gmail.com for confirmation.');
                form.reset();
            }, (error) => {
                console.log('FAILED...', error);
                alert('Failed to send request. Please try again or contact directly.');
            });
        });
    }
});

// Toggle Home & Services
function showHome() {
    document.getElementById('home').style.display = 'flex';
    document.getElementById('services').style.display = 'none';
}

function showServices() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('services').style.display = 'flex';
}
