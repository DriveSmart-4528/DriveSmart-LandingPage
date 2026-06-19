function toggleFaq(element) {
    console.log('FAQ clicked'); // Debug log

    const faqItem = element.parentElement;
    const isActive = faqItem.classList.contains('active');

    console.log('Is active:', isActive); // Debug log

    // Close all FAQ items first
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
        // No necesitamos cambiar arrow.textContent
    });

    // If this item wasn't active, open it
    if (!isActive) {
        console.log('Opening FAQ item'); // Debug log
        faqItem.classList.add('active');
        // La flecha se rota automáticamente con CSS
    } else {
        console.log('Closing FAQ item'); // Debug log
    }
}

// Ensure the function is available when the page loads
document.addEventListener('DOMContentLoaded', function () {
    console.log('FAQ script loaded');
});