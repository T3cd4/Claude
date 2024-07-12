document.addEventListener('DOMContentLoaded', (event) => {
    // Handle form submission
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message. We will get back to you soon!');
            form.reset();
        });
    }

    // Add click event listeners to menu items
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            const itemName = item.querySelector('h3').textContent;
            const itemPrice = item.querySelector('.price').textContent;
            alert(`You selected ${itemName} (${itemPrice}). Great choice!`);
        });
    });
});
