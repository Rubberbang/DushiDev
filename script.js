// 1. Blinking Cursor Effect
const cursor = document.querySelector('.typing-cursor');
if (cursor) {
    setInterval(() => {
        cursor.style.opacity = (cursor.style.opacity === '0' ? '1' : '0');
    }, 500);
}

// 2. Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
            
            // Close menu automatically on mobile when a link is clicked
            const navLinks = document.querySelector('.nav-links');
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        }
    });
});

// 3. HAMBURGER MENU LOGIC (The Fix)
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        // Toggle the 'active' class on the menu
        navLinks.classList.toggle('active');
        
        // Optional: Animate the hamburger icon turning into an X
        hamburger.classList.toggle('toggle');
    });
}