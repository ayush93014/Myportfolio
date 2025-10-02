// Set current year
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('year').textContent = new Date().getFullYear();

    // Form submission
    const form = document.getElementById('portfolio-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your request! Please complete the payment and send the transaction ID to ayush93014@gmail.com for confirmation.');
            form.reset();
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
