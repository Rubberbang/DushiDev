// Simple blinking cursor effect
const cursor = document.querySelector('.typing-cursor');

setInterval(() => {
    if (cursor.style.opacity === '0') {
        cursor.style.opacity = '1';
    } else {
        cursor.style.opacity = '0';
    }
}, 500);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
}); 